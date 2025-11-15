import { useEffect, useLayoutEffect } from 'react';
import { isBrowser } from '../helper/dom';

/**
 * 同构 useLayoutEffect
 *
 */
const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
