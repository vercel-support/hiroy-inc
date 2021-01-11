import React, { ReactElement } from 'react';
import parse, { domToReact } from 'html-react-parser';
import wp_kses_post, { allowedTagsType, allowedAttributesType } from '../lib/wp_kses_post';

// types.
import { Element } from 'domhandler/lib/node';

// components.
import Link from 'next/link';

interface SafeHtmlProps {
	html: string;
	allowedTags?: allowedTagsType;
	allowedAttributes?: allowedAttributesType;
}

/**
 * Returns a cleaned React output.
 *
 * @returns React component that has been cleaned from unsafe HTML.
 */
const SafeHtml: React.FC<SafeHtmlProps> = ({ html, allowedTags, allowedAttributes }) => {
	const cleanedHTML = wp_kses_post(html, allowedTags, allowedAttributes);
	return parse(cleanedHTML && cleanedHTML.length ? cleanedHTML : '&nbsp;', {
		replace: (node) => {
			if ( node ! instanceof Element ) {
				return false;
			}
			node = node as Element;
			// Replace nested links with NextJS links.
			if (node.type === 'tag' && node.name === 'a' && node.children.length) {
				return (
					<Link href={node.attribs.href}>
						<>
							{domToReact(node.children)}
						</>
					</Link>
				);
			}

			return node;
		},
	}) as ReactElement;
};

export default SafeHtml;
