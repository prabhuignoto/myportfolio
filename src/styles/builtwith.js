import Styled from 'react-emotion';
import ReactSVG from '../assets/react.svg';
import TypeScript from '../assets/typescript.svg';
import VueSVG from '../assets/vue.svg';
import Redux from '../assets/redux.svg';
import GraphQLSVG from '../assets/graphql.svg';
import NodeSVG from '../assets/nodejs-icon.svg';
import ApolloSVG from '../assets/apollo.svg';

export const Wrapper = Styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  /* margin: 0.5rem; */
  margin-left: auto;
  font-size: 1rem;
  flex-wrap: wrap;
  margin-right: 0.5rem;
`;

export const ItemWrapper = Styled('div')`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* margin-left: 1rem; */
`;

export const ItemLabel = Styled('span')`
  display: block;
  text-transform: capitalize;
  margin-left: 0.25rem;
  font-size: 0.9rem;
`;

export const Item = Styled('div')`
  padding: 0.75rem;
  width: 1.6rem;
  height: 1.6rem;
  margin: 0 0.5rem;
  background: url(${(p) => {
    switch (p.name) {
      case 'react': return ReactSVG;
      case 'typescript': return TypeScript;
      case 'vue': return VueSVG;
      case 'redux': return Redux;
      case 'graphql': return GraphQLSVG;
      case 'node': return NodeSVG;
      case 'apollo': return ApolloSVG;
      default:
        return '';
    }
  }});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;
