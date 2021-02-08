import React, {useState, useEffect} from "react";
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SocialIconProps {
  bordered?: boolean;
  socialLinks: {
    facebook?: string;
    twitter: string;
    pinterest?: string;
    behance?: string;
    linkedin?: string;
    dribbble?: string;
    github?: string;
  }
}

const SocialIcons: React.FC<SocialIconProps> = (props) => {
  const [socialLinks, setSocialLinks] = useState(props.socialLinks);

  return (
    <ul className={props.bordered ? 'mi-socialicons mi-socialicons-bordered' : 'mi-socialicons'}>
      {!socialLinks.facebook ? null : <li>
        <a rel="noopener noreferrer" target="_blank" href={socialLinks.facebook}>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </li>}
      {!socialLinks.twitter ? null : <li>
        <a rel="noopener noreferrer" target="_blank" href={socialLinks.twitter}>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </li>}
      {!socialLinks.linkedin ? null : <li>
        <a rel="noopener noreferrer" target="_blank" href={socialLinks.linkedin}>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>}
      {!socialLinks.github ? null : <li>
        <a rel="noopener noreferrer" target="_blank" href={socialLinks.github}>
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>}
    </ul>
  );
}

export default SocialIcons;
