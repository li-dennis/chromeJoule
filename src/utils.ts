import * as uuid4 from "uuid/v4"

/*
* @param {object} cookHistoryEntry: the following fields are required for guide cooks
*                 {string} started_from
*                 {string} idempotency_id | 16+ chars required
*                 {string} start_time
*                 {string} program_type
*                 {string} program_id
*                 {string} guide_id
*                 {string} cook_id
*                 {string} timer_id
*                 {integer} set_point
*                 {integer} cook_time
*/

export function generateCookHistoryEntry(options = {}) {
  const defaultOptions = {
    started_from: "jouleApp",
    idempotency_id: uuid4(),
    start_time: (new Date()).getTime(),
    program_type: "MANUAL",
    cook_id: uuid4().split("-").join(""),
    set_point: 80,
  }

  return {...defaultOptions, ...options}
}
