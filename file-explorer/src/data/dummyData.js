export const fileExplorerDummyData = [
  {
    id: '1',
    isFolder: true,
    isExpanded: false,
    name: 'src',
    files: [
      {
        id: '2',
        isFolder: false,
        name: 'App.js',
      },
      {
        id: '3',
        isFolder: true,
        isExpanded: false,
        name: 'components',
        files: [
          {
            id: '4',
            isFolder: true,
            name: 'comments',
            files: [
              {
                id: '5',
                isFolder: false,
                name: 'Comments.jsx',
              },
              {
                id: '6',
                isFolder: false,
                name: 'Comments.css',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '8',
    isFolder: true,
    isExpanded: false,
    name: 'public',
    files: [
      {
        id: '9',
        isFolder: false,
        name: 'logo.img',
      },
    ],
  },
];
