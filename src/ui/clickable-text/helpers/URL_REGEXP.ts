// RegExp from https://www.regextester.com/93652
// DON'T READ IT
// Just use, it's correct
export const URL_REGEXP = /(?:(?:https?|ftp):\/\/|\b(?:[a-z\d]+\.))(?:(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))?\))+(?:\((?:[^\s()<>]+|(?:\(?:[^\s()<>]+\)))?\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))?/g

export const URL_FILE_REGEX = /((\/|\\|\/\/|https?:\\\\|https?:\/\/)[a-z0-9\s_@\-^!#$%&+={}.\/\\\[\]]+)+\.zip|rar|7z|tar|zipx|DMG$/
