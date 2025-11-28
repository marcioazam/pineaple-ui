/** @type {import('plop').PlopGeneratorConfig} */
export default function (plop) {
  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name (PascalCase):',
      },
      {
        type: 'list',
        name: 'package',
        message: 'Which package?',
        choices: ['core', 'primitives'],
        default: 'core',
      },
    ],
    actions: (data) => {
      const basePath = `packages/${data.package}/src/components/{{kebabCase name}}`;
      const actions = [
        {
          type: 'add',
          path: `${basePath}/{{kebabCase name}}.tsx`,
          templateFile: 'plop-templates/component.tsx.hbs',
        },
        {
          type: 'add',
          path: `${basePath}/{{kebabCase name}}.styles.ts`,
          templateFile: 'plop-templates/component.styles.ts.hbs',
        },
        {
          type: 'add',
          path: `${basePath}/{{kebabCase name}}.test.tsx`,
          templateFile: 'plop-templates/component.test.tsx.hbs',
        },
        {
          type: 'add',
          path: `${basePath}/index.ts`,
          templateFile: 'plop-templates/index.ts.hbs',
        },
      ];
      return actions;
    },
  });
}
