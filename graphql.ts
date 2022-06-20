import { gql } from '@apollo/client';

export const GET_POSTS = gql`
	query Posts {
		posts {
			nodes {
				title
				content
				excerpt
			}
		}
	}
`;

export const LOGIN = gql`
	mutation Login($input: LoginInput!) {
		login(input: $input) {
			authToken
		}
	}
`;
