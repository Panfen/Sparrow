import { compose } from '../utils';

export function createCoordinate({
  x, y, width, height, transforms: coordinates = [],
}) {
  const transforms = coordinates.map((co) => co({
    x, y, width, height,
  })).flat();
  const output = compose(...transforms);

  const types = transforms.map((tr) => tr.type());

  output.isPolar = () => types.indexOf('polar') !== -1;

  // eslint-disable-next-line no-bitwise
  output.isTranpose = () => types.reduce((is, type) => is ^ (type === 'transpose'), false);

  output.center = () => [x + width / 2, height + height / 2];

  return output;
}
