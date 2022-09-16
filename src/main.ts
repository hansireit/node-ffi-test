// @ts-ignore
import ffi from 'ffi-napi';
// @ts-ignore
import koffi from 'koffi';

const testArgs = [12, 14, 35];
const libraryFileName = 'libfactorial.dylib';

const calculateUsingFfi = (args: number[]) => {
  const libfactorial = ffi.Library(`./src/${libraryFileName}`, {
    'factorial': [ 'uint64', [ 'int' ] ]
  });

  for (const arg of args) {
    console.log(`FFI Napi: Factorial of ${arg} is ${libfactorial.factorial(arg)}`);
  }
}

const calculateUsingKoffi = (args: number[]) => {
  const lib = koffi.load(`./src/${libraryFileName}`);
  const koffiFactorial = lib.func('factorial', 'uint64_t', ['int']);

  for (const arg of args) {
    console.log(`FFI Napi: Factorial of ${arg} is ${koffiFactorial(arg)}`);
  }
}


// FFI Napi
console.time('ffi-napi');
calculateUsingFfi(testArgs);
console.timeEnd('ffi-napi');


// Koffi
console.time('koffi');
calculateUsingKoffi(testArgs);
console.timeEnd('koffi');
