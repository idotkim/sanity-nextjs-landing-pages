export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e323c9ccc495c167534cef3',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-9riwvytw',
                  apiId: 'a94a11da-d80f-4354-b040-e189594b243d'
                },
                {
                  buildHookId: '5e323c9da46a965eaa298944',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-hytnizku',
                  apiId: '3042e8a8-8057-4287-98bf-d2d819955355'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/idotkim/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-hytnizku.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
