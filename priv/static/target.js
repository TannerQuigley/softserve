var pxtTargetBundle = {
  "id": "sample",
  "name": "sample",
  "title": "MakeCode Editor Sample",
  "corepkg": "core",
  "cloud": {
    "workspace": false,
    "packages": true
  },
  "bundleddirs": [
    "libs/core"
  ],
  "runtime": {
    "mathBlocks": true,
    "loopsBlocks": true,
    "logicBlocks": true,
    "variablesBlocks": true,
    "textBlocks": false,
    "functionBlocks": false,
    "listsBlocks": false
  },
  "simulator": {
    "autoRun": true
  },
  "appTheme": {
    "logoUrl": "/./",
    "homeUrl": "/./",
    "privacyUrl": "https://go.microsoft.com/fwlink/?LinkId=521839",
    "termsOfUseUrl": "https://go.microsoft.com/fwlink/?LinkID=206977",
    "betaUrl": "https://makecode.com/",
    "docMenu": [
      {
        "name": "About",
        "path": "/./docs/about.html"
      },
      {
        "name": "Docs",
        "path": "/./docs/docs.html"
      }
    ],
    "coloredToolbox": false,
    "monacoToolbox": true,
    "invertedMenu": true,
    "showHomeScreen": true,
    "homeScreenHero": "data:image/png;base64,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AEYiDAEAAAAwEmEIAAAAgJEIQwAAAACMRBgCAAAAYCTCEAAAAAAjEYYAAAAAGIkwBAAAAMBIhCEAAAAARiIMAQAAADASYQgAAACAkQhDAAAAAIxEGAIAAABgJMIQAAAAACMRhgAAAAAYiTAEAAAAwEiEIQAAAABGIgwBAAAAMBJhCAAAAICRCEMAAAAAjEQYAgAAAGAkwhAAAAAAIxGGAAAAABiJMAQAAADASIQhAAAAAEYiDAEAAAAwEmEIAAAAgJEIQwAAAACMRBgCAAAAYCTCEAAAAAAjEYYAAAAAGIkwBAAAAMBIhCEAAAAARiIMAQAAADASYQgAAACAkQhDAAAAAIxEGAIAAABgJMIQAAAAACMRhgAAAAAYiTAEAAAAwEiEIQAAAABGIgwBAAAAMBJhCAAAAICRCEMAAAAAjEQYAgAAAGAkwhAAAAAAIxGGAAAAABiJMAQAAADASIQhAAAAAEYiDAEAAAAwEmEIAAAAgJEIQwAAAACMRBgCAAAAYCTCEAAAAAAjEYYAAAAAGIkwBAAAAMBIhCEAAAAARiIMAQAAADASYQgAAACAkQhDAAAAAIxEGAIAAABgJMIQAAAAACMRhgAAAAAYiTAEAAAAwEiEIQAAAABGIgwBAAAAMBJhCAAAAICRCEMAAAAAjEQYAgAAAGAkwhAAAAAAIxGGAAAAABiJMAQAAADASIQhAAAAAEYiDAEAAAAwEmEIAAAAgJEIQwAAAACMRBgCAAAAYCTCEAAAAAAjEYYAAAAAGIkwBAAAAMBIhCEAAAAARiIMAQAAADASYQgAAACAkQhDAAAAAIxEGAIAAABgJMIQAAAAACMRhgAAAAAYiTAEAAAAwEiEIQAAAABGIgwBAAAAMBJhCAAAAICRCEMAAAAAjEQYAgAAAGAkwhAAAAAAIxGGAAAAABiJMAQAAADASIQhAAAAAEYiDAEAAAAwEmEIAAAAgJEIQwAAAACMRBgCAAAAYCTCEAAAAAAjEYYAAAAAGIkwBAAAAMBIhCEAAAAARiIMAQAAADASYQgAAACAkQhDAAAAAIxEGAIAAABgJMIQAAAAACMRhgAAAAAYiTAEAAAAwEiEIQAAAABGIgwBAAAAMBJhCAAAAICRCEMAAAAAjEQYAgAAAGAkwhAAAAAAIxGGAAAAABiJMAQAAADASIQhAAAAAEYiDAEAAAAwEmEIAAAAgJEIQwAAAACM9P8AdhU6AQDp7FgAAAAASUVORK5CYII=",
    "blocklyOptions": {
      "grid": {
        "spacing": 45,
        "length": 7,
        "colour": "rgba(189, 195, 199, 0.30)",
        "snap": true
      }
    },
    "simAnimationEnter": "fly right in",
    "simAnimationExit": "fly right out",
    "monacoColors": {
      "editor.background": "#ecf0f1"
    },
    "TOC": [
      {
        "name": "About",
        "subitems": [],
        "path": "/about",
        "nextName": "Blocks",
        "nextPath": "/blocks"
      },
      {
        "name": "Blocks",
        "subitems": [
          {
            "name": "On Start",
            "subitems": [],
            "path": "/blocks/on-start",
            "prevName": "Blocks",
            "prevPath": "/blocks",
            "nextName": "Loops",
            "nextPath": "/blocks/loops"
          },
          {
            "name": "Loops",
            "subitems": [
              {
                "name": "repeat",
                "subitems": [],
                "path": "/blocks/loops/repeat",
                "prevName": "Loops",
                "prevPath": "/blocks/loops",
                "nextName": "for",
                "nextPath": "/blocks/loops/for"
              },
              {
                "name": "for",
                "subitems": [],
                "path": "/blocks/loops/for",
                "prevName": "repeat",
                "prevPath": "/blocks/loops/repeat",
                "nextName": "while",
                "nextPath": "/blocks/loops/while"
              },
              {
                "name": "while",
                "subitems": [],
                "path": "/blocks/loops/while",
                "prevName": "for",
                "prevPath": "/blocks/loops/for",
                "nextName": "Logic",
                "nextPath": "/blocks/logic"
              }
            ],
            "path": "/blocks/loops",
            "prevName": "On Start",
            "prevPath": "/blocks/on-start",
            "nextName": "repeat",
            "nextPath": "/blocks/loops/repeat"
          },
          {
            "name": "Logic",
            "subitems": [
              {
                "name": "if",
                "subitems": [],
                "path": "/blocks/logic/if",
                "prevName": "Logic",
                "prevPath": "/blocks/logic",
                "nextName": "Boolean",
                "nextPath": "/blocks/logic/boolean"
              },
              {
                "name": "Boolean",
                "subitems": [],
                "path": "/blocks/logic/boolean",
                "prevName": "if",
                "prevPath": "/blocks/logic/if",
                "nextName": "Variables",
                "nextPath": "/blocks/variables"
              }
            ],
            "path": "/blocks/logic",
            "prevName": "while",
            "prevPath": "/blocks/loops/while",
            "nextName": "if",
            "nextPath": "/blocks/logic/if"
          },
          {
            "name": "Variables",
            "subitems": [
              {
                "name": "assign",
                "subitems": [],
                "path": "/blocks/variables/assign",
                "prevName": "Variables",
                "prevPath": "/blocks/variables",
                "nextName": "change var",
                "nextPath": "/blocks/variables/change"
              },
              {
                "name": "change var",
                "subitems": [],
                "path": "/blocks/variables/change",
                "prevName": "assign",
                "prevPath": "/blocks/variables/assign",
                "nextName": "var",
                "nextPath": "/blocks/variables/var"
              },
              {
                "name": "var",
                "subitems": [],
                "path": "/blocks/variables/var",
                "prevName": "change var",
                "prevPath": "/blocks/variables/change",
                "nextName": "Math",
                "nextPath": "/blocks/math"
              }
            ],
            "path": "/blocks/variables",
            "prevName": "Boolean",
            "prevPath": "/blocks/logic/boolean",
            "nextName": "assign",
            "nextPath": "/blocks/variables/assign"
          },
          {
            "name": "Math",
            "subitems": [],
            "path": "/blocks/math",
            "prevName": "var",
            "prevPath": "/blocks/variables/var",
            "nextName": "JavaScript blocks",
            "nextPath": "/blocks/javascript-blocks"
          },
          {
            "name": "JavaScript blocks",
            "subitems": [],
            "path": "/blocks/javascript-blocks",
            "prevName": "Math",
            "prevPath": "/blocks/math",
            "nextName": "Custom blocks",
            "nextPath": "/blocks/custom"
          },
          {
            "name": "Custom blocks",
            "subitems": [],
            "path": "/blocks/custom",
            "prevName": "JavaScript blocks",
            "prevPath": "/blocks/javascript-blocks",
            "nextName": "JavaScript",
            "nextPath": "/javascript"
          }
        ],
        "path": "/blocks",
        "prevName": "About",
        "prevPath": "/about",
        "nextName": "On Start",
        "nextPath": "/blocks/on-start"
      },
      {
        "name": "JavaScript",
        "subitems": [
          {
            "name": "Calling",
            "subitems": [],
            "path": "/javascript/call",
            "prevName": "JavaScript",
            "prevPath": "/javascript",
            "nextName": "Sequencing",
            "nextPath": "/javascript/sequence"
          },
          {
            "name": "Sequencing",
            "subitems": [],
            "path": "/javascript/sequence",
            "prevName": "Calling",
            "prevPath": "/javascript/call",
            "nextName": "Variables",
            "nextPath": "/javascript/variables"
          },
          {
            "name": "Variables",
            "subitems": [],
            "path": "/javascript/variables",
            "prevName": "Sequencing",
            "prevPath": "/javascript/sequence",
            "nextName": "Operators",
            "nextPath": "/javascript/operators"
          },
          {
            "name": "Operators",
            "subitems": [],
            "path": "/javascript/operators",
            "prevName": "Variables",
            "prevPath": "/javascript/variables",
            "nextName": "Statements",
            "nextPath": "/javascript/statements"
          },
          {
            "name": "Statements",
            "subitems": [],
            "path": "/javascript/statements",
            "prevName": "Operators",
            "prevPath": "/javascript/operators",
            "nextName": "Functions",
            "nextPath": "/javascript/functions"
          },
          {
            "name": "Functions",
            "subitems": [],
            "path": "/javascript/functions",
            "prevName": "Statements",
            "prevPath": "/javascript/statements",
            "nextName": "Types",
            "nextPath": "/javascript/types"
          },
          {
            "name": "Types",
            "subitems": [],
            "path": "/javascript/types",
            "prevName": "Functions",
            "prevPath": "/javascript/functions",
            "nextName": "Classes",
            "nextPath": "/javascript/classes"
          },
          {
            "name": "Classes",
            "subitems": [],
            "path": "/javascript/classes",
            "prevName": "Types",
            "prevPath": "/javascript/types",
            "nextName": "Interfaces",
            "nextPath": "/javascript/interfaces"
          },
          {
            "name": "Interfaces",
            "subitems": [],
            "path": "/javascript/interfaces",
            "prevName": "Classes",
            "prevPath": "/javascript/classes",
            "nextName": "Generics",
            "nextPath": "/javascript/generics"
          },
          {
            "name": "Generics",
            "subitems": [],
            "path": "/javascript/generics",
            "prevName": "Interfaces",
            "prevPath": "/javascript/interfaces",
            "nextName": "Types",
            "nextPath": "/types"
          }
        ],
        "path": "/javascript",
        "prevName": "Custom blocks",
        "prevPath": "/blocks/custom",
        "nextName": "Calling",
        "nextPath": "/javascript/call"
      },
      {
        "name": "Types",
        "subitems": [
          {
            "name": "Number",
            "subitems": [],
            "path": "/types/number",
            "prevName": "Types",
            "prevPath": "/types",
            "nextName": "String",
            "nextPath": "/types/string"
          },
          {
            "name": "String",
            "subitems": [],
            "path": "/types/string",
            "prevName": "Number",
            "prevPath": "/types/number",
            "nextName": "Boolean",
            "nextPath": "/types/boolean"
          },
          {
            "name": "Boolean",
            "subitems": [],
            "path": "/types/boolean",
            "prevName": "String",
            "prevPath": "/types/string",
            "nextName": "Array",
            "nextPath": "/types/array"
          },
          {
            "name": "Array",
            "subitems": [],
            "path": "/types/array",
            "prevName": "Boolean",
            "prevPath": "/types/boolean",
            "nextName": "Function",
            "nextPath": "/types/function"
          },
          {
            "name": "Function",
            "subitems": [],
            "path": "/types/function",
            "prevName": "Array",
            "prevPath": "/types/array",
            "nextName": "About",
            "nextPath": "/about"
          }
        ],
        "path": "/types",
        "prevName": "Generics",
        "prevPath": "/javascript/generics",
        "nextName": "Number",
        "nextPath": "/types/number"
      },
      {
        "name": "",
        "subitems": [
          {
            "name": "About",
            "subitems": [],
            "path": "/about",
            "prevName": "Function",
            "prevPath": "/types/function",
            "nextName": "Support",
            "nextPath": "/support"
          },
          {
            "name": "Support",
            "subitems": [],
            "path": "/support",
            "prevName": "About",
            "prevPath": "/about",
            "nextName": "FAQ",
            "nextPath": "/faq"
          },
          {
            "name": "FAQ",
            "subitems": [],
            "path": "/faq",
            "prevName": "Support",
            "prevPath": "/support",
            "nextName": "Translate",
            "nextPath": "/translate"
          },
          {
            "name": "Translate",
            "subitems": [],
            "path": "/translate",
            "prevName": "FAQ",
            "prevPath": "/faq",
            "nextName": "Sharing projects",
            "nextPath": "/share"
          },
          {
            "name": "Sharing projects",
            "subitems": [],
            "path": "/share",
            "prevName": "Translate",
            "prevPath": "/translate",
            "nextName": "Offline support",
            "nextPath": "/offline"
          },
          {
            "name": "Offline support",
            "subitems": [],
            "path": "/offline",
            "prevName": "Sharing projects",
            "prevPath": "/share",
            "nextName": "Command Line Interface",
            "nextPath": "/cli"
          }
        ],
        "prevName": "Function",
        "prevPath": "/types/function"
      },
      {
        "name": "",
        "subitems": [
          {
            "name": "Command Line Interface",
            "subitems": [],
            "path": "/cli",
            "prevName": "Offline support",
            "prevPath": "/offline",
            "nextName": "Visual Studio Code support",
            "nextPath": "/code"
          },
          {
            "name": "Visual Studio Code support",
            "subitems": [],
            "path": "/code",
            "prevName": "Command Line Interface",
            "prevPath": "/cli",
            "nextName": "Blocks Embed",
            "nextPath": "/blocks-embed"
          },
          {
            "name": "Blocks Embed",
            "subitems": [],
            "path": "/blocks-embed",
            "prevName": "Visual Studio Code support",
            "prevPath": "/code"
          }
        ],
        "prevName": "Offline support",
        "prevPath": "/offline"
      }
    ],
    "embedUrl": "http://microsoft.github.io/pxt-sample/",
    "id": "sample",
    "title": "MakeCode Editor Sample",
    "name": "sample",
    "homeScreenHeroCDN": "@cdnUrl@/blob/2bd5099ea536df25eb07fdd99f6246714fb0213b/static/hero.png",
    "htmlDocIncludes": {}
  },
  "blocksprj": {
    "id": "blocksprj",
    "config": {
      "name": "{0}",
      "dependencies": {
        "core": "*"
      },
      "description": "",
      "files": [
        "main.blocks",
        "main.ts",
        "README.md"
      ]
    },
    "files": {
      "README.md": " ",
      "main.blocks": "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n</xml>",
      "main.ts": " "
    }
  },
  "tsprj": {
    "id": "tsprj",
    "config": {
      "name": "{0}",
      "dependencies": {
        "core": "*"
      },
      "description": "",
      "files": [
        "main.ts",
        "README.md"
      ]
    },
    "files": {
      "README.md": " ",
      "main.ts": " "
    }
  },
  "bundledpkgs": {
    "core": {
      "README.md": "# basic\n\nAdd your docs here...",
      "enums.d.ts": "declare const enum Direction {\n    //% block=left\n    Left,\n    //% block=right\n    Right\n}\n\ndeclare const enum Hop {\n    //% block=short\n    Short,\n    //% block=long\n    Long,\n    //% block=silly\n    Silly,\n    //% block=wow\n    Incredible,\n    //% block=\"to the moon!\"\n    Astronomical\n}\n\n\n",
      "ns.ts": "/**\n * Basic functionalities.\n */\n//% color=#00BCD4 weight=100\nnamespace turtle {\n\n}\n\n//% color=#D4BC00 weight=95\nnamespace hare {\n\n}\n\n/**\n * Control flow\n */\n//% color=#FF5722 weight=90\nnamespace control {\n\n}\n",
      "pxt-core.d.ts": "/// <reference no-default-lib=\"true\"/>\n\ninterface Array<T> {\n    /**\n      * Get or set the length of an array. This number is one more than the index of the last element the array.\n      */\n    //% shim=Array_::length weight=84\n    //% blockId=\"lists_length\" block=\"length of %VALUE\" blockBuiltin=true blockNamespace=\"arrays\"\n    length: number;\n\n    /**\n      * Append a new element to an array.\n      * @param items New elements of the Array.\n      */\n    //% help=arrays/push\n    //% shim=Array_::push weight=50\n    //% blockId=\"array_push\" block=\"%list| add value %value| to end\" blockNamespace=\"arrays\"\n    push(item: T): void;\n\n    /**\n      * Remove the last element from an array and return it.\n      */\n    //% help=arrays/pop\n    //% shim=Array_::pop weight=45\n    //% blockId=\"array_pop\" block=\"get and remove last value from %list\" blockNamespace=\"arrays\"\n    //% blockGap=64\n    pop(): T;\n\n    /**\n      * Reverse the elements in an array. The first array element becomes the last, and the last array element becomes the first.\n      */\n    //% help=arrays/reverse\n    //% helper=arrayReverse weight=10\n    //% blockId=\"array_reverse\" block=\"reverse %list\" blockNamespace=\"arrays\"\n    reverse(): void;\n\n    /**\n      * Remove the first element from an array and return it. This method changes the length of the array.\n      */\n    //% help=arrays/shift\n    //% helper=arrayShift weight=30\n    //% blockId=\"array_shift\" block=\"get and remove first value from %list\" blockNamespace=\"arrays\"\n    shift(): T;\n\n    /**\n      * Add one element to the beginning of an array and return the new length of the array.\n      * @param element to insert at the start of the Array.\n      */\n    //% help=arrays/unshift\n    //% helper=arrayUnshift weight=25\n    //% blockId=\"array_unshift\" block=\"%list| insert %value| at beginning\" blockNamespace=\"arrays\"\n    //unshift(...values:T[]): number; //rest is not supported in our compiler yet.\n    unshift(value: T): number;\n\n    /**\n      * Return a section of an array.\n      * @param start The beginning of the specified portion of the array. eg: 0\n      * @param end The end of the specified portion of the array. eg: 0\n      */\n    //% help=arrays/slice\n    //% helper=arraySlice weight=41 blockNamespace=\"arrays\"\n    slice(start: number, end: number): T[];\n\n    /**\n      * Remove elements from an array.\n      * @param start The zero-based location in the array from which to start removing elements. eg: 0\n      * @param deleteCount The number of elements to remove. eg: 0\n      */\n    //% helper=arraySplice weight=40\n    splice(start: number, deleteCount: number): void;\n\n    /**\n      * Sort the elements of an array in place and returns the array. The sort is not necessarily stable.\n      * @param specifies a function that defines the sort order. If omitted, the array is sorted according to the prmitive type\n      */\n    //% helper=arraySort weight=40\n    sort(callbackfn?: (value1: T, value2: T) => number): T[];\n\n    /**\n      * Call a defined callback function on each element of an array, and return an array containing the results.\n      * @param callbackfn A function that accepts up to two arguments. The map method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arrayMap weight=40\n    map<U>(callbackfn: (value: T, index: number) => U): U[];\n\n    /**\n      * Return the elements of an array that meet the condition specified in a callback function.\n      * @param callbackfn A function that accepts up to two arguments. The filter method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arrayFilter weight=40\n    filter(callbackfn: (value: T, index: number) => boolean): T[];\n\n    /**\n      * Call the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.\n      * @param callbackfn A function that accepts up to three arguments. The reduce method calls the callbackfn function one time for each element in the array.\n      * @param initialValue Initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.\n      */\n    //% helper=arrayReduce weight=40\n    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number) => U, initialValue: U): U;\n\n\n    /** Remove the first occurence of an object. Returns true if removed. */\n    //% shim=Array_::removeElement weight=48\n    removeElement(element: T): boolean;\n\n    /** Remove the element at a certain index. */\n    //% help=arrays/remove-at\n    //% shim=Array_::removeAt weight=15\n    //% blockId=\"array_removeat\" block=\"%list| remove value at %index\" blockNamespace=\"arrays\"\n    removeAt(index: number): T;\n\n    /**\n     * Insert the value at a particular index, increases length by 1\n     * @param index the zero-based position in the list to insert the value, eg: 0\n     * @param the value to insert, eg: 0\n     */\n    //% help=arrays/insert-at\n    //% shim=Array_::insertAt weight=20\n    //% blockId=\"array_insertAt\" block=\"%list| insert at %index| value %value\" blockNamespace=\"arrays\"\n    insertAt(index: number, value: T): void;\n\n    /**\n      * Return the index of the first occurrence of a value in an array.\n      * @param item The value to locate in the array.\n      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.\n      */\n    //% help=arrays/index-of\n    //% shim=Array_::indexOf weight=40\n    //% blockId=\"array_indexof\" block=\"%list| find index of %value\" blockNamespace=\"arrays\"\n    indexOf(item: T, fromIndex?: number): number;\n\n    /**\n     * Get the value at a particular index\n     * @param index the zero-based position in the list of the item, eg: 0\n     */\n    //% help=arrays/get\n    //% shim=Array_::getAt weight=85\n    get(index: number): T;\n\n    /**\n     * Store a value at a particular index\n     * @param index the zero-based position in the list to store the value, eg: 0\n     * @param the value to insert, eg: 0\n     */\n    //% help=arrays/set\n    //% shim=Array_::setAt weight=84\n    set(index: number, value: T): void;\n\n    [n: number]: T;\n}\n\ndeclare interface String {\n    // This block is currently disabled in favor of the built-in Blockly \"Create text with\" block, which compiles to \"\" + \"\"\n    // Add % sign back to the block annotation to re-enable\n    /**\n     * Returns a string that contains the concatenation of two or more strings.\n     * @param other The string to append to the end of the string.\n     */\n    //% shim=String_::concat weight=49\n    //% blockId=\"string_concat\" blockNamespace=\"text\"\n    // block=\"join %list=text|%other\"\n    concat(other: string): string;\n\n    /**\n     * Return the character at the specified index.\n     * @param index The zero-based index of the desired character.\n     */\n    //% shim=String_::charAt weight=48\n    //% help=text/char-at\n    //% blockId=\"string_get\" block=\"char from %this=text|at %pos\" blockNamespace=\"text\"\n    charAt(index: number): string;\n\n    /** Returns the length of a String object. */\n    //% property shim=String_::length weight=47\n    //% blockId=\"text_length\" block=\"length of %VALUE\" blockBuiltin=true blockNamespace=\"text\"\n    length: number;\n\n    /**\n     * Return the Unicode value of the character at the specified location.\n     * @param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.\n     */\n    //% shim=String_::charCodeAt\n    charCodeAt(index: number): number;\n\n    /**\n     * See how the order of characters in two strings is different (in ASCII encoding).\n     * @param that String to compare to target string\n     */\n    //% shim=String_::compare\n    //% help=text/compare\n    //% blockId=\"string_compare\" block=\"compare %this=text| to %that\" blockNamespace=\"text\"\n    compare(that: string): number;\n\n    /**\n     * Return a substring of the current string.\n     * @param start first character index; can be negative from counting from the end, eg:0\n     * @param length number of characters to extract\n     */\n    //% shim=String_::substr length.defl=10\n    //% help=text/substr\n    //% blockId=\"string_substr\" block=\"substring of %this=text|from %start|of length %length\" blockNamespace=\"text\"\n    substr(start: number, length?: number): string;\n\n    // This block is currently disabled, as it does not compile in some targets\n    // Add % sign back to the block annotation to re-enable\n    /** Returns a value indicating if the string is empty */\n    //% shim=String_::isEmpty\n    //% blockId=\"string_isempty\" blockNamespace=\"text\"\n    // block=\"%this=text| is empty\"\n    isEmpty(): boolean;\n\n    [index: number]: string;\n}\n\n/**\n  * Convert a string to an integer.\n  * @param s A string to convert into a number. eg: 123\n  */\n//% shim=String_::toNumber\n//% help=text/parse-int\n//% blockId=\"string_parseint\" block=\"parse to integer %text\" blockNamespace=\"text\"\n//% text.defl=\"123\"\ndeclare function parseInt(text: string): number;\n\ninterface Object { }\ninterface Function { }\ninterface IArguments { }\ninterface RegExp { }\ntype TemplateStringsArray = Array<string>;\n\ntype uint8 = number;\ntype uint16 = number;\ntype uint32 = number;\ntype int8 = number;\ntype int16 = number;\ntype int32 = number;\n\n\ndeclare interface Boolean {\n    /**\n     * Returns a string representation of an object.\n     */\n    //% shim=Boolean_::toString\n    toString(): string;\n}\n\n/**\n * Combine, split, and search text strings.\n*/\n//% blockNamespace=\"Text\"\ndeclare namespace String {\n\n    /**\n     * Make a string from the given ASCII character code.\n     */\n    //% help=math/from-char-code\n    //% shim=String_::fromCharCode\n    //% weight=0\n    //% blockNamespace=\"Text\" blockId=\"stringFromCharCode\" block=\"text from char code %code\" weight=1\n    function fromCharCode(code: number): string;\n}\n\ndeclare interface Number {\n    /**\n     * Returns a string representation of a number.\n     */\n    //% shim=Number_::toString\n    toString(): string;\n}\n\n/**\n * Add, remove, and replace items in lists.\n*/\n//% blockNamespace=\"Arrays\"\ndeclare namespace Array {\n}\n\n/**\n * More complex operations with numbers.\n*/\ndeclare namespace Math {\n    /**\n     * Returns the value of a base expression taken to a specified power.\n     * @param x The base value of the expression.\n     * @param y The exponent value of the expression.\n     */\n    //% shim=Math_::pow\n    function pow(x: number, y: number): number;\n\n    /**\n     * Returns a pseudorandom number between 0 and 1.\n     */\n    //% shim=Math_::random\n    //% help=math/random\n    function random(): number;\n\n    /**\n     * Returns a pseudorandom number between min and max included.\n     * If both numbers are integral, the result is integral.\n     * @param min the lower inclusive bound, eg: 0\n     * @param max the upper inclusive bound, eg: 10\n     */\n    //% blockId=\"device_random\" block=\"pick random %min|to %limit\"\n    //% help=math/random-range\n    //% shim=Math_::randomRange\n    function randomRange(min: number, max: number): number;\n\n    /**\n     * Returns the natural logarithm (base e) of a number.\n     * @param x A number\n     */\n    //% shim=Math_::log\n    function log(x: number): number;\n\n    /**\n     * Returns returns ``e^x``.\n     * @param x A number\n     */\n    //% shim=Math_::exp\n    function exp(x: number): number;\n\n    /**\n     * Returns the sine of a number.\n     * @param x An angle in radians\n     */\n    //% shim=Math_::sin\n    function sin(x: number): number;\n\n    /**\n     * Returns the cosine of a number.\n     * @param x An angle in radians\n     */\n    //% shim=Math_::cos\n    function cos(x: number): number;\n\n    /**\n     * Returns the tangent of a number.\n     * @param x An angle in radians\n     */\n    //% shim=Math_::tan\n    function tan(x: number): number;\n\n    /**\n     * Returns the arcsine (in radians) of a number\n     * @param x A number\n     */\n    //% shim=Math_::asin\n    function asin(x: number): number;\n\n    /**\n     * Returns the arccosine (in radians) of a number\n     * @param x A number\n     */\n    //% shim=Math_::acos\n    function acos(x: number): number;\n\n    /**\n     * Returns the arctangent (in radians) of a number\n     * @param x A number\n     */\n    //% shim=Math_::atan\n    function atan(x: number): number;\n\n    /**\n     * Returns the arctangent of the quotient of its arguments.\n     * @param y A number\n     * @param x A number\n     */\n    //% shim=Math_::atan2\n    function atan2(y: number, x: number): number;\n\n    /**\n     * Returns the square root of a number.\n     * @param x A numeric expression.\n     */\n    //% shim=Math_::sqrt\n    function sqrt(x: number): number;\n\n    /**\n     * Returns the smallest number greater than or equal to its numeric argument.\n     * @param x A numeric expression.\n     */\n    //% shim=Math_::ceil\n    function ceil(x: number): number;\n\n    /**\n      * Returns the greatest number less than or equal to its numeric argument.\n      * @param x A numeric expression.\n      */\n    //% shim=Math_::floor\n    function floor(x: number): number;\n\n    /**\n      * Returns the number with the decimal part truncated.\n      * @param x A numeric expression.\n      */\n    //% shim=Math_::trunc\n    function trunc(x: number): number;\n\n    /**\n      * Returns a supplied numeric expression rounded to the nearest number.\n      * @param x The value to be rounded to the nearest number.\n      */\n    //% shim=Math_::round\n    function round(x: number): number;\n\n    /**\n     * Returns the value of integer signed 32 bit multiplication of two numbers.\n     * @param x The first number\n     * @param y The second number\n     */\n    //% shim=Math_::imul\n    function imul(x: number, y: number): number;\n\n    /**\n     * Returns the value of integer signed 32 bit division of two numbers.\n     * @param x The first number\n     * @param y The second number\n     */\n    //% shim=Math_::idiv\n    function idiv(x: number, y: number): number;\n}\n",
      "pxt-helpers.ts": "type Action = () => void;\n\nnamespace helpers {\n    export function arraySplice<T>(arr: T[], start: number, len: number) {\n        if (start < 0) {\n            return;\n        }\n        for (let i = 0; i < len; ++i) {\n            arr.removeAt(start)\n        }\n    }\n\n    export function arrayReverse<T>(arr: T[]): void {\n        let len = arr.length;\n        for (let i = 0; i < len / 2; i++) {\n            swap(arr, i, len - i - 1);\n        }\n    }\n\n    export function arrayShift<T>(arr: T[]): T {\n        return arr.removeAt(0);\n    }\n\n    /*TODO: Enable this multiple value unshift, after rest is enabled in our compiler.\n        export function arrayUnshift<T>(arr: T[], ...values: T[]) : number {\n            for(let i = values.length; i > 0; --i) {\n                arr.insertAt(0, values[i - 1]);\n            }\n            return arr.length;\n        }\n    */\n    export function arrayUnshift<T>(arr: T[], value: T): number {\n        arr.insertAt(0, value);\n        return arr.length;\n    }\n\n    function swap<T>(arr: T[], i: number, j: number): void {\n        let temp: T = arr[i];\n        arr[i] = arr[j];\n        arr[j] = temp;\n    }\n\n    function sortHelper<T>(arr: T[], callbackfn?: (value1: T, value2: T) => number): T[] {\n        if (arr.length <= 0 || !callbackfn) {\n            return arr;\n        }\n        let len = arr.length;\n        // simple selection sort.\n        for (let i = 0; i < len - 1; ++i) {\n            for (let j = i + 1; j < len; ++j) {\n                if (callbackfn(arr[i], arr[j]) > 0) {\n                    swap(arr, i, j);\n                }\n            }\n        }\n        return arr;\n    }\n\n    export function arraySort<T>(arr: T[], callbackfn?: (value1: T, value2: T) => number): T[] {\n        if (!callbackfn) {\n            //TODO: support native strings and number sorting\n            /* callbackfn = function (value1: string, value2: string) : number {\n                return value1.compare(value2);\n                }*/\n        }\n        return sortHelper(arr, callbackfn);\n    }\n\n    export function arrayMap<T, U>(arr: T[], callbackfn: (value: T, index: number) => U): U[] {\n        let res: U[] = []\n        let len = arr.length // caching this seems to match V8\n        for (let i = 0; i < len; ++i) {\n            res.push(callbackfn(arr[i], i))\n        }\n        return res\n    }\n\n    export function arrayFilter<T>(arr: T[], callbackfn: (value: T, index: number) => boolean): T[] {\n        let res: T[] = []\n        let len = arr.length\n        for (let i = 0; i < len; ++i) {\n            let v = arr[i] // need to cache\n            if (callbackfn(v, i)) res.push(v)\n        }\n        return res\n    }\n\n    export function arrayReduce<T, U>(arr: T[], callbackfn: (previousValue: U, currentValue: T, currentIndex: number) => U, initialValue: U): U {\n        let len = arr.length\n        for (let i = 0; i < len; ++i) {\n            initialValue = callbackfn(initialValue, arr[i], i)\n        }\n        return initialValue\n    }\n\n    export function arraySlice<T>(arr: T[], start: number, end: number): T[] {\n        const res: T[] = [];\n        const len = arr.length;\n\n        if (start < 0) {\n            start = Math.max(len + start, 0);\n        }\n\n        if (end < 0) {\n            end = len + end;\n        }\n\n        const sliceLength = end - start;\n\n        for (let i = 0; i < sliceLength; ++i) {\n            const index = i + start;\n            if (index >= len) {\n                break;\n            }\n            res.push(arr[index]);\n        }\n        return res;\n    }\n}\n\nnamespace Math {\n    export function clamp(min: number, max: number, value: number): number {\n        return Math.min(max, Math.max(min, value));\n    }\n\n    /**\n      * Returns the absolute value of a number (the value without regard to whether it is positive or negative).\n      * For example, the absolute value of -5 is the same as the absolute value of 5.\n      * @param x A numeric expression for which the absolute value is needed.\n      */\n    export function abs(x: number): number {\n        return x < 0 ? -x : x;\n    }\n\n    /**\n      * Returns the sign of the x, indicating whether x is positive, negative or zero.\n      * @param x The numeric expression to test\n      */\n    export function sign(x: number): number {\n        if (x == 0) return 0;\n        if (x > 0) return 1;\n        return -1;\n    }\n\n    /**\n      * Returns the larger of two supplied numeric expressions.\n      */\n    export function max(a: number, b: number): number {\n        if (a >= b) return a;\n        return b;\n    }\n\n    /**\n      * Returns the smaller of two supplied numeric expressions.\n      */\n    export function min(a: number, b: number): number {\n        if (a <= b) return a;\n        return b;\n    }\n}\n",
      "pxt.json": "{\n  \"name\": \"core\",\n  \"description\": \"A target sample for PXT\",\n  \"files\": [\n    \"README.md\",\n    \"pxt-core.d.ts\",\n    \"pxt-helpers.ts\",\n    \"enums.d.ts\",\n    \"sims.d.ts\",\n    \"ns.ts\"\n  ],\n  \"testFiles\": [\n    \"test.ts\"\n  ],\n  \"public\": true,\n  \"dependencies\": {}\n}",
      "sims.d.ts": "// Auto-generated from simulator. Do not edit.\ndeclare namespace hare {\n    /**\n     * This is hop\n     */\n    //% blockId=\"sampleHop\" block=\"hop %hop on color %color=colorNumberPicker\"\n    //% hop.fieldEditor=\"gridpicker\"\n    //% shim=hare::hop\n    function hop(hop: Hop, color: number): void;\n\n    //% blockId=sampleConnect block=\"connect\"\n    //% optionalVariableArgs\n    //% shim=hare::connect\n    function connect(): void;\n\n    //% blockId=sampleOnLand block=\"on land\"\n    //% optionalVariableArgs\n    //% shim=hare::onLand\n    function onLand(handler: (height: number, more: number, most: number) => void): void;\n\n}\ndeclare namespace turtle {\n    /**\n     * Moves the sprite forward\n     * @param steps number of steps to move, eg: 1\n     */\n    //% weight=90\n    //% blockId=sampleForward block=\"forward %steps\"\n    //% shim=turtle::forwardAsync promise\n    function forward(steps: number): void;\n\n    /**\n     * Moves the sprite forward\n     * @param direction the direction to turn, eg: Direction.Left\n     * @param angle degrees to turn, eg:90\n     */\n    //% weight=85\n    //% blockId=sampleTurn block=\"turn %direction|by %angle degrees\"\n    //% angle.min=-180 angle.max=180\n    //% shim=turtle::turnAsync promise\n    function turn(direction: Direction, angle: number): void;\n\n    /**\n     * Triggers when the turtle bumps a wall\n     * @param handler \n     */\n    //% blockId=onBump block=\"on bump\"\n    //% shim=turtle::onBump\n    function onBump(handler: () => void): void;\n\n}\ndeclare namespace loops {\n    /**\n     * Repeats the code forever in the background. On each iteration, allows other code to run.\n     * @param body the code to repeat\n     */\n    //% help=functions/forever weight=55 blockGap=8\n    //% blockId=device_forever block=\"forever\"\n    //% shim=loops::forever\n    function forever(body: () => void): void;\n\n    /**\n     * Pause for the specified time in milliseconds\n     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000\n     */\n    //% help=functions/pause weight=54\n    //% block=\"pause (ms) %pause\" blockId=device_pause\n    //% shim=loops::pauseAsync promise\n    function pause(ms: number): void;\n\n}\ndeclare namespace console {\n    /**\n     * Print out message\n     */\n    //%\n    //% shim=console::log\n    function log(msg: string): void;\n\n}\n    /**\n     * A ghost on the screen.\n     */\n    //%\n    declare class Sprite {\n        /**\n         * The X-coordiante\n         */\n        //%\n        //% shim=.x\n        public x: number;\n\n        /**\n         * The Y-coordiante\n         */\n        //%\n        //% shim=.y\n        public y: number;\n\n        /**\n         * Move the thing forward\n         */\n        //%\n        //% shim=.forwardAsync promise\n        public forward(steps: number): void;\n\n    }\ndeclare namespace sprites {\n    /**\n     * Creates a new sprite\n     */\n    //% blockId=\"sampleCreate\" block=\"createSprite\"\n    //% shim=sprites::createSprite\n    function createSprite(): Sprite;\n\n}\n\n// Auto-generated. Do not edit. Really.\n",
      "test.ts": ""
    }
  },
  "compile": {
    "isNative": false,
    "hasHex": false,
    "floatingPoint": true
  },
  "versions": {
    "target": "2.0.1",
    "pxt": "3.4.8"
  }
}