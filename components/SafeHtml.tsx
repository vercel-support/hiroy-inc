import React, { ReactElement } from 'react';
import parse, { domToReact } from 'html-react-parser';
import wp_kses_post, { allowedTagsType, allowedAttributesType } from '../lib/wp_kses_post';

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
			// Replace nested links with NextJS links.
			if (node.type === 'tag' && node.name === 'a' && node.children.length) {
				if (node.children.length > 1) {
					console.log('SafeHTML Link Warning: Too Many Children');
					return false;
				}
				return <Link href={node.attribs.href}>{domToReact(node.children)}</Link>;
			}

			return node;
		},
	}) as ReactElement;
};

export default SafeHtml;
