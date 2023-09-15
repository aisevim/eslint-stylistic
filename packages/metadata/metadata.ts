// generated by scripts/prepare.ts
import type { PackageInfo } from './types'

export const packages: Readonly<PackageInfo[]> = Object.freeze([
  {
    "name": "eslint-config-stylistic",
    "shortId": "eslint-config-stylistic",
    "pkgId": "eslint-config-stylistic",
    "path": "/Users/antfu/i/eslint-stylistic/packages/eslint-config-stylistic",
    "rules": []
  },
  {
    "name": "eslint-plugin-stylistic",
    "shortId": "stylistic",
    "pkgId": "stylistic",
    "path": "/Users/antfu/i/eslint-stylistic/packages/eslint-plugin-stylistic",
    "rules": []
  },
  {
    "name": "eslint-plugin-stylistic-js",
    "shortId": "js",
    "pkgId": "stylistic-js",
    "path": "/Users/antfu/i/eslint-stylistic/packages/eslint-plugin-stylistic-js",
    "rules": [
      {
        "name": "array-bracket-newline",
        "ruleId": "stylistic-js/array-bracket-newline",
        "entry": "packages/eslint-plugin-stylistic-js/rules/array-bracket-newline/array-bracket-newline.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/array-bracket-newline/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Enforce linebreaks after opening and before closing array brackets",
            "recommended": false
          }
        }
      },
      {
        "name": "array-bracket-spacing",
        "ruleId": "stylistic-js/array-bracket-spacing",
        "entry": "packages/eslint-plugin-stylistic-js/rules/array-bracket-spacing/array-bracket-spacing.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/array-bracket-spacing/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Enforce consistent spacing inside array brackets",
            "recommended": false
          }
        }
      },
      {
        "name": "array-element-newline",
        "ruleId": "stylistic-js/array-element-newline",
        "entry": "packages/eslint-plugin-stylistic-js/rules/array-element-newline/array-element-newline.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/array-element-newline/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Enforce line breaks after each array element",
            "recommended": false
          }
        }
      },
      {
        "name": "arrow-spacing",
        "ruleId": "stylistic-js/arrow-spacing",
        "entry": "packages/eslint-plugin-stylistic-js/rules/arrow-spacing/arrow-spacing.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/arrow-spacing/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Enforce consistent spacing before and after the arrow in arrow functions",
            "recommended": false
          }
        }
      },
      {
        "name": "block-spacing",
        "ruleId": "stylistic-js/block-spacing",
        "entry": "packages/eslint-plugin-stylistic-js/rules/block-spacing/block-spacing.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/block-spacing/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Disallow or enforce spaces inside of blocks after opening block and before closing block",
            "recommended": false
          }
        }
      },
      {
        "name": "comma-spacing",
        "ruleId": "stylistic-js/comma-spacing",
        "entry": "packages/eslint-plugin-stylistic-js/rules/comma-spacing/comma-spacing.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/comma-spacing/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Enforce consistent spacing before and after commas",
            "recommended": false
          }
        }
      },
      {
        "name": "computed-property-spacing",
        "ruleId": "stylistic-js/computed-property-spacing",
        "entry": "packages/eslint-plugin-stylistic-js/rules/computed-property-spacing/computed-property-spacing.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/computed-property-spacing/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Enforce consistent spacing inside computed property brackets",
            "recommended": false
          }
        }
      },
      {
        "name": "func-call-spacing",
        "ruleId": "stylistic-js/func-call-spacing",
        "entry": "packages/eslint-plugin-stylistic-js/rules/func-call-spacing/func-call-spacing.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/func-call-spacing/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Require or disallow spacing between function identifiers and their invocations",
            "recommended": false
          }
        }
      },
      {
        "name": "function-call-argument-newline",
        "ruleId": "stylistic-js/function-call-argument-newline",
        "entry": "packages/eslint-plugin-stylistic-js/rules/function-call-argument-newline/function-call-argument-newline.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/function-call-argument-newline/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Enforce line breaks between arguments of a function call",
            "recommended": false
          }
        }
      },
      {
        "name": "function-paren-newline",
        "ruleId": "stylistic-js/function-paren-newline",
        "entry": "packages/eslint-plugin-stylistic-js/rules/function-paren-newline/function-paren-newline.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/function-paren-newline/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Enforce consistent line breaks inside function parentheses",
            "recommended": false
          }
        }
      },
      {
        "name": "generator-star-spacing",
        "ruleId": "stylistic-js/generator-star-spacing",
        "entry": "packages/eslint-plugin-stylistic-js/rules/generator-star-spacing/generator-star-spacing.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/generator-star-spacing/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Enforce consistent spacing around `*` operators in generator functions",
            "recommended": false
          }
        }
      },
      {
        "name": "implicit-arrow-linebreak",
        "ruleId": "stylistic-js/implicit-arrow-linebreak",
        "entry": "packages/eslint-plugin-stylistic-js/rules/implicit-arrow-linebreak/implicit-arrow-linebreak.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/implicit-arrow-linebreak/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Enforce the location of arrow function bodies",
            "recommended": false
          }
        }
      },
      {
        "name": "indent",
        "ruleId": "stylistic-js/indent",
        "entry": "packages/eslint-plugin-stylistic-js/rules/indent/indent.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/indent/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Enforce consistent indentation",
            "recommended": false
          }
        }
      },
      {
        "name": "key-spacing",
        "ruleId": "stylistic-js/key-spacing",
        "entry": "packages/eslint-plugin-stylistic-js/rules/key-spacing/key-spacing.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/key-spacing/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Enforce consistent spacing between keys and values in object literal properties",
            "recommended": false
          }
        }
      },
      {
        "name": "keyword-spacing",
        "ruleId": "stylistic-js/keyword-spacing",
        "entry": "packages/eslint-plugin-stylistic-js/rules/keyword-spacing/keyword-spacing.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/keyword-spacing/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Enforce consistent spacing before and after keywords",
            "recommended": false
          }
        }
      },
      {
        "name": "linebreak-style",
        "ruleId": "stylistic-js/linebreak-style",
        "entry": "packages/eslint-plugin-stylistic-js/rules/linebreak-style/linebreak-style.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/linebreak-style/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Enforce consistent linebreak style",
            "recommended": false
          }
        }
      },
      {
        "name": "lines-around-comment",
        "ruleId": "stylistic-js/lines-around-comment",
        "entry": "packages/eslint-plugin-stylistic-js/rules/lines-around-comment/lines-around-comment.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/lines-around-comment/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Require empty lines around comments",
            "recommended": false
          }
        }
      },
      {
        "name": "lines-around-directive",
        "ruleId": "stylistic-js/lines-around-directive",
        "entry": "packages/eslint-plugin-stylistic-js/rules/lines-around-directive/lines-around-directive.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/lines-around-directive/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Require or disallow newlines around directives",
            "recommended": false
          }
        }
      },
      {
        "name": "lines-between-class-members",
        "ruleId": "stylistic-js/lines-between-class-members",
        "entry": "packages/eslint-plugin-stylistic-js/rules/lines-between-class-members/lines-between-class-members.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/lines-between-class-members/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Require or disallow an empty line between class members",
            "recommended": false
          }
        }
      },
      {
        "name": "multiline-ternary",
        "ruleId": "stylistic-js/multiline-ternary",
        "entry": "packages/eslint-plugin-stylistic-js/rules/multiline-ternary/multiline-ternary.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/multiline-ternary/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Enforce newlines between operands of ternary expressions",
            "recommended": false
          }
        }
      },
      {
        "name": "newline-after-var",
        "ruleId": "stylistic-js/newline-after-var",
        "entry": "packages/eslint-plugin-stylistic-js/rules/newline-after-var/newline-after-var.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/newline-after-var/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Require or disallow an empty line after variable declarations",
            "recommended": false
          }
        }
      },
      {
        "name": "newline-before-return",
        "ruleId": "stylistic-js/newline-before-return",
        "entry": "packages/eslint-plugin-stylistic-js/rules/newline-before-return/newline-before-return.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/newline-before-return/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Require an empty line before `return` statements",
            "recommended": false
          }
        }
      },
      {
        "name": "newline-per-chained-call",
        "ruleId": "stylistic-js/newline-per-chained-call",
        "entry": "packages/eslint-plugin-stylistic-js/rules/newline-per-chained-call/newline-per-chained-call.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/newline-per-chained-call/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Require a newline after each call in a method chain",
            "recommended": false
          }
        }
      },
      {
        "name": "no-mixed-spaces-and-tabs",
        "ruleId": "stylistic-js/no-mixed-spaces-and-tabs",
        "entry": "packages/eslint-plugin-stylistic-js/rules/no-mixed-spaces-and-tabs/no-mixed-spaces-and-tabs.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/no-mixed-spaces-and-tabs/README.md",
        "meta": {
          "docs": {
            "description": "Disallow mixed spaces and tabs for indentation",
            "recommended": true
          }
        }
      },
      {
        "name": "no-multi-spaces",
        "ruleId": "stylistic-js/no-multi-spaces",
        "entry": "packages/eslint-plugin-stylistic-js/rules/no-multi-spaces/no-multi-spaces.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/no-multi-spaces/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Disallow multiple spaces",
            "recommended": false
          }
        }
      },
      {
        "name": "no-multiple-empty-lines",
        "ruleId": "stylistic-js/no-multiple-empty-lines",
        "entry": "packages/eslint-plugin-stylistic-js/rules/no-multiple-empty-lines/no-multiple-empty-lines.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/no-multiple-empty-lines/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Disallow multiple empty lines",
            "recommended": false
          }
        }
      },
      {
        "name": "no-spaced-func",
        "ruleId": "stylistic-js/no-spaced-func",
        "entry": "packages/eslint-plugin-stylistic-js/rules/no-spaced-func/no-spaced-func.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/no-spaced-func/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Disallow spacing between function identifiers and their applications (deprecated)",
            "recommended": false
          }
        }
      },
      {
        "name": "no-trailing-spaces",
        "ruleId": "stylistic-js/no-trailing-spaces",
        "entry": "packages/eslint-plugin-stylistic-js/rules/no-trailing-spaces/no-trailing-spaces.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/no-trailing-spaces/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Disallow trailing whitespace at the end of lines",
            "recommended": false
          }
        }
      },
      {
        "name": "no-whitespace-before-property",
        "ruleId": "stylistic-js/no-whitespace-before-property",
        "entry": "packages/eslint-plugin-stylistic-js/rules/no-whitespace-before-property/no-whitespace-before-property.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/no-whitespace-before-property/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Disallow whitespace before properties",
            "recommended": false
          }
        }
      },
      {
        "name": "object-curly-newline",
        "ruleId": "stylistic-js/object-curly-newline",
        "entry": "packages/eslint-plugin-stylistic-js/rules/object-curly-newline/object-curly-newline.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/object-curly-newline/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Enforce consistent line breaks after opening and before closing braces",
            "recommended": false
          }
        }
      },
      {
        "name": "object-curly-spacing",
        "ruleId": "stylistic-js/object-curly-spacing",
        "entry": "packages/eslint-plugin-stylistic-js/rules/object-curly-spacing/object-curly-spacing.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/object-curly-spacing/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Enforce consistent spacing inside braces",
            "recommended": false
          }
        }
      },
      {
        "name": "object-property-newline",
        "ruleId": "stylistic-js/object-property-newline",
        "entry": "packages/eslint-plugin-stylistic-js/rules/object-property-newline/object-property-newline.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/object-property-newline/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Enforce placing object properties on separate lines",
            "recommended": false
          }
        }
      },
      {
        "name": "operator-linebreak",
        "ruleId": "stylistic-js/operator-linebreak",
        "entry": "packages/eslint-plugin-stylistic-js/rules/operator-linebreak/operator-linebreak.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/operator-linebreak/README.md",
        "meta": {
          "fixable": "code",
          "docs": {
            "description": "Enforce consistent linebreak style for operators",
            "recommended": false
          }
        }
      },
      {
        "name": "padded-blocks",
        "ruleId": "stylistic-js/padded-blocks",
        "entry": "packages/eslint-plugin-stylistic-js/rules/padded-blocks/padded-blocks.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/padded-blocks/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Require or disallow padding within blocks",
            "recommended": false
          }
        }
      },
      {
        "name": "padding-line-between-statements",
        "ruleId": "stylistic-js/padding-line-between-statements",
        "entry": "packages/eslint-plugin-stylistic-js/rules/padding-line-between-statements/padding-line-between-statements.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/padding-line-between-statements/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Require or disallow padding lines between statements",
            "recommended": false
          }
        }
      },
      {
        "name": "rest-spread-spacing",
        "ruleId": "stylistic-js/rest-spread-spacing",
        "entry": "packages/eslint-plugin-stylistic-js/rules/rest-spread-spacing/rest-spread-spacing.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/rest-spread-spacing/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Enforce spacing between rest and spread operators and their expressions",
            "recommended": false
          }
        }
      },
      {
        "name": "semi-spacing",
        "ruleId": "stylistic-js/semi-spacing",
        "entry": "packages/eslint-plugin-stylistic-js/rules/semi-spacing/semi-spacing.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/semi-spacing/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Enforce consistent spacing before and after semicolons",
            "recommended": false
          }
        }
      },
      {
        "name": "space-before-blocks",
        "ruleId": "stylistic-js/space-before-blocks",
        "entry": "packages/eslint-plugin-stylistic-js/rules/space-before-blocks/space-before-blocks.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/space-before-blocks/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Enforce consistent spacing before blocks",
            "recommended": false
          }
        }
      },
      {
        "name": "space-before-function-paren",
        "ruleId": "stylistic-js/space-before-function-paren",
        "entry": "packages/eslint-plugin-stylistic-js/rules/space-before-function-paren/space-before-function-paren.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/space-before-function-paren/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Enforce consistent spacing before `function` definition opening parenthesis",
            "recommended": false
          }
        }
      },
      {
        "name": "space-in-parens",
        "ruleId": "stylistic-js/space-in-parens",
        "entry": "packages/eslint-plugin-stylistic-js/rules/space-in-parens/space-in-parens.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/space-in-parens/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Enforce consistent spacing inside parentheses",
            "recommended": false
          }
        }
      },
      {
        "name": "space-infix-ops",
        "ruleId": "stylistic-js/space-infix-ops",
        "entry": "packages/eslint-plugin-stylistic-js/rules/space-infix-ops/space-infix-ops.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/space-infix-ops/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Require spacing around infix operators",
            "recommended": false
          }
        }
      },
      {
        "name": "space-unary-ops",
        "ruleId": "stylistic-js/space-unary-ops",
        "entry": "packages/eslint-plugin-stylistic-js/rules/space-unary-ops/space-unary-ops.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/space-unary-ops/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Enforce consistent spacing before or after unary operators",
            "recommended": false
          }
        }
      },
      {
        "name": "spaced-comment",
        "ruleId": "stylistic-js/spaced-comment",
        "entry": "packages/eslint-plugin-stylistic-js/rules/spaced-comment/spaced-comment.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/spaced-comment/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Enforce consistent spacing after the `//` or `/*` in a comment",
            "recommended": false
          }
        }
      },
      {
        "name": "switch-colon-spacing",
        "ruleId": "stylistic-js/switch-colon-spacing",
        "entry": "packages/eslint-plugin-stylistic-js/rules/switch-colon-spacing/switch-colon-spacing.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/switch-colon-spacing/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Enforce spacing around colons of switch statements",
            "recommended": false
          }
        }
      },
      {
        "name": "template-curly-spacing",
        "ruleId": "stylistic-js/template-curly-spacing",
        "entry": "packages/eslint-plugin-stylistic-js/rules/template-curly-spacing/template-curly-spacing.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/template-curly-spacing/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Require or disallow spacing around embedded expressions of template strings",
            "recommended": false
          }
        }
      },
      {
        "name": "template-tag-spacing",
        "ruleId": "stylistic-js/template-tag-spacing",
        "entry": "packages/eslint-plugin-stylistic-js/rules/template-tag-spacing/template-tag-spacing.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/template-tag-spacing/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Require or disallow spacing between template tags and their literals",
            "recommended": false
          }
        }
      },
      {
        "name": "yield-star-spacing",
        "ruleId": "stylistic-js/yield-star-spacing",
        "entry": "packages/eslint-plugin-stylistic-js/rules/yield-star-spacing/yield-star-spacing.js",
        "docsEntry": "packages/eslint-plugin-stylistic-js/rules/yield-star-spacing/README.md",
        "meta": {
          "fixable": "whitespace",
          "docs": {
            "description": "Require or disallow spacing around the `*` in `yield*` expressions",
            "recommended": false
          }
        }
      }
    ]
  },
  {
    "name": "@eslint-stylistic/metadata",
    "shortId": "metadata",
    "pkgId": "metadata",
    "path": "/Users/antfu/i/eslint-stylistic/packages/metadata",
    "rules": []
  },
  {
    "name": "eslint-plugin-stylistic-ts",
    "shortId": "ts",
    "pkgId": "stylistic-ts",
    "path": "/Users/antfu/i/eslint-stylistic/packages/eslint-plugin-stylistic-ts",
    "rules": []
  }
])

