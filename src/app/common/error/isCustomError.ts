import CustomError from './CustomError';

export default function isCustomError(error: any ): error is CustomError {
    const customError = error as CustomError;

    return typeof customError.title !== 'undefined' &&
        typeof customError.data !== 'undefined' &&
        typeof customError.type !== 'undefined';
}
