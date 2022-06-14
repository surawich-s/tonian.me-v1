import { gql } from '@apollo/client';

export const GET_POSTS = gql`
	query GetPostsEdges {
		posts {
			edges {
				node {
					id
					title
					excerpt
					content
					date
					featuredImage {
						node {
							id
							sourceUrl
						}
					}
				}
			}
		}
	}
`;
