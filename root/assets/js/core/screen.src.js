/**
 * Defines methods under mwf.screen for device screen dimensions.
 *
 * @package core
 * @subpackage js
 *
 * @author ebollens
 * @copyright Copyright (c) 2010-11 UC Regents
 * @license http://mwf.ucla.edu/license
 * @version 20110902
 *
 * @requires mwf
 * @requires mwf.browser
 * 
 * @requires /root/assets/js/core/vars.php
 * @requires /root/assets/js/core/browser.js
 */

mwf.screen = new function() {
    
    var ws = window.screen;
    
    /**
     * Determine device screen width.
     * 
     * @return int|null
     */
    this.getWidth=function(){
        return ws.width 
            ? ws.width 
            : mwf.browser.getWidth(); 
    }
    
    /**
     * Determine device screen height.
     * 
     * @return int|null
     */
    this.getHeight=function(){
        return ws.width 
            ? ws.width 
            : mwf.browser.getWidth();
    }
}