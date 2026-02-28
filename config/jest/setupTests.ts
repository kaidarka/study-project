// Такой файл вы могли наблюдать при create-react-app
import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';
import { TextDecoder, TextEncoder } from 'node:util';

if (typeof global.TextEncoder === 'undefined') {
    global.TextEncoder = TextEncoder;
}

if (typeof global.TextDecoder === 'undefined') {
    global.TextDecoder = TextDecoder as typeof global.TextDecoder;
}
