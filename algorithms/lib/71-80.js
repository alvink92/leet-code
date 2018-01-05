// 71. Simplify Path

// Given an absolute path for a file (Unix-style), simplify it.

// For example,
// path = "/home/", => "/home"
// path = "/a/./b/../../c/", => "/c"
// click to show corner cases.

// Corner Cases:
// Did you consider the case where path = "/../"?
// In this case, you should return "/".
// Another corner case is the path might contain multiple slashes '/' together, such as "/home//foo/".
// In this case, you should ignore redundant slashes and return "/home/foo".

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = [];
    
    path = path.replace(/\/+/g,"/").replace(/^\//,"").replace(/\/$/,"").split("/");

    for(let i = 0; i < path.length; i++) {
        switch(path[i]) {
            case '..':
                stack.pop();
                break;
            case '.':
                break;
            default:
                stack.push(path[i]);
        }
    }
    
    return "/" + stack.join("/");
};