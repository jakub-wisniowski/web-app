/**
 * Word.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "words",
  attributes: {
    english: {type:'string', required: true},
    polish: {type:'string', required: true},
    lessonID: {type: 'string', required: true}
  }
};