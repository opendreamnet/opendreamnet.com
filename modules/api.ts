import { Context } from '@nuxt/types'
import { GraphQLClient, gql } from 'graphql-request'

export interface Account {
  id: string
  name: string
  slug: string
  description: string | null
  longDescription: string | null
  website: string | null
  twitterHandle: string | null
  githubHandle: string | null
  imageUrl?: string
  childrenAccounts?: {
    totalCount: number
    nodes: Account[]
  }
}

export class API {
  client: GraphQLClient

  org: Account | null = null

  public constructor(protected ctx: Context) {
    this.client = new GraphQLClient('https://api.opencollective.com/graphql/v2')
    this.fetchAccount()
  }

  public async fetchAccount() {
    const query = gql`
      query account($slug: String) {
        account(slug: $slug) {
          id
          name
          slug
          description
          longDescription
          website
          twitterHandle
          githubHandle
          childrenAccounts(accountType: PROJECT) {
            totalCount
            nodes {
              id
              name
              slug
              description
              longDescription
              website
              twitterHandle
              githubHandle
              imageUrl(format: png)
            }
          }
        }
      }
    `

    const data = await this.client.request<{ account: Account }>(query, { slug: this.ctx.$config.opencollective })

    this.org = data.account

    console.log(this.org)

    return this.org
  }
}