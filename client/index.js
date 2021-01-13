
/**
 * @imports
 */
import '@webqit/play-sequence/src/browser-entry.js';
import '@webqit/play-icon/src/browser-entry.js';
import * as data from '../common/data.js';

/**
 * Handles main HTTP process.
 * 
 * @param object    process
 * @param any       recieved
 * @param function  next
 * 
 * @return object
 */
export default async (process, recieved, next) => {
    if (next.pathname) {
        return next();
    }
    return { title: 'WebQit - Client', ...data, };
};

/**
 * Creates and configures the rendering window.
 * 
 * @param object    data
 * @param window    _window
 * @param function  next
 * 
 * @return window
 */
export async function render(data, _window, next) {
    return next();
}