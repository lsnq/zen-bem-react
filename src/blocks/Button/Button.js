import { decl } from 'bem-react-core';

export default decl({
  block: 'button',
  mods({type}) {
    return {type};
  }
});
