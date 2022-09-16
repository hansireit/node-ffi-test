# Node FFI Test
## Generate the Dynamic Linked Library
### Windows
- Download w64devkit from [here](https://github.com/skeeto/w64devkit/releases)
- Extract the zip
- Start w64devkit.exe and navigate to the src folder of this project
  - run gcc -c -DBUILD_DLL factorial.c
  - run gcc -shared -o libfactorial.dll -Wl,--out-implib,libtstdll.a factorial.o
### Linux
- run gcc -shared -fpic factorial.c -o libfactorial.so
### MacOS
- run gcc -dynamiclib -undefined suppress -flat_namespace factorial.c -o libfactorial.dylib

## Start the Test
- Replace the value of the __libraryFileName__ variable to your library-file (libfactorial.dll, libfactorial.so or libfactorial.dylib)
- run **npm install**
- run **npm run start:dev**
