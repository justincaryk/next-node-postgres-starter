import { toHaveNoViolations } from 'jest-axe';

// Extend Jest's expect with toHaveNoViolations
expect.extend(toHaveNoViolations);
