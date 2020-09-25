export default {
  widgets: [
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
                  buildHookId: '5f6e24ff5a36ef00df1c224e',
                  title: 'Sanity Studio',
                  name: 'sanity-everyvote-studio',
                  apiId: '1235691c-c1b3-4649-afd5-05abac813cd2'
                },
                {
                  buildHookId: '5f6e24ffd33c020153d37e61',
                  title: 'Blog Website',
                  name: 'sanity-everyvote',
                  apiId: '4c8f8b3b-cd9d-4a68-8053-60678af6b53b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jasonwhat/sanity-everyvote-',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-everyvote.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
