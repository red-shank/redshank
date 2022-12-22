import { PrismTheme } from 'prism-react-renderer';
import { green } from '@nextui-org/react';

const makeCodeTheme = (): PrismTheme => ({
  plain: {
    backgroundColor: 'var(--nextui-colors-codeBackground)',
    color: '#F4F4F4',
    fontWeight: '500',
    fontStyle: 'normal',
    fontFamily: '$mono',
    fontSize: '$xs',
    textRendering: 'geometricPrecision'
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: 'var(--nextui-colors-accents6)'
      }
    },
    {
      types: ['symbol', 'text'],
      style: {
        color: 'var(--nextui-colors-white)'
      }
    },
    {
      types: ['punctuation'],
      style: {
        color: green.green200
      }
    },
    {
      types: ['function'],
      style: {
        color: '#61AFEF'
      }
    },
    {
      types: ['namespace'],
      style: {
        opacity: 1
      }
    },
    {
      types: ['tag', 'operator', 'number'],
      style: {
        color: '#E5C07B'
      }
    },
    {
      types: ['property', 'function'],
      style: {
        color: 'var(--nextui-colors-success)'
      }
    },
    {
      types: ['tag-id', 'selector', 'atrule-id'],
      style: {
        color: '#E06C75'
      }
    },
    {
      types: ['attr-name'],
      style: {
        color: 'var(--nextui-colors-yellow600)'
      }
    },
    {
      types: [
        'boolean',
        'string',
        'entity',
        'url',
        'attr-value',
        'keyword',
        'control',
        'directive',
        'unit',
        'statement',
        'regex',
        'at-rule',
        'placeholder',
        'variable'
      ],
      style: {
        color: '#98C379'
      }
    },
    {
      types: ['deleted'],
      style: {
        textDecorationLine: 'line-through'
      }
    },
    {
      types: ['language-javascript', 'script'],
      style: {
        color: 'var(--nextui-colors-success)'
      }
    },
    {
      types: ['inserted'],
      style: {
        textDecorationLine: 'underline'
      }
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic'
      }
    },
    {
      types: ['important', 'bold'],
      style: {
        fontWeight: 'bold'
      }
    },
    {
      types: ['important', 'primitive'],
      style: {
        color: '#c678dd'
      }
    }
  ]
});

export default makeCodeTheme;
