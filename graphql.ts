import { gql } from '@apollo/client';

export const GET_POSTS = gql`
	query Posts {
		posts {
			nodes {
				id
				title
				content
				excerpt
				featuredImage {
					node {
						id
						mediaItemUrl
					}
				}
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
