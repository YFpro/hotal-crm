import instance from "./http";
import {SUCCESS} from "../lib/base";

function  categoryAdd() {

}
function  categoryIndex() {
    return  new Promise((resolve,reject) => {
        instance('/admin/category/indexall').then(res => {
            if (res.code === SUCCESS) {
                resolve(res)
            }
        }).catch((error) => {
            reject(error)
        })
    })
}
function  categoryRead() {

}
function  categoryDelete() {

}
function  categoryUpdate() {

}
export {categoryAdd,categoryDelete,categoryUpdate,categoryIndex,categoryRead}