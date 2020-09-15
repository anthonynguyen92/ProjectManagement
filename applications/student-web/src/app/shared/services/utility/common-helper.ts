export class CommonHelper {

  private static storageKeyTopicIdLast = 'topicIdLast';

  static newId(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  static pad(num: number, size?: number) {
    let s = String(num);
    while (s.length < (size || 2)) { s = '0' + s; }
    return s;
  }

  static shuffle(arra1) {
    let ctr = arra1.length;
    let temp;
    let index;

    // While there are elements in the array
    while (ctr > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * ctr);
      // Decrease ctr by 1
      ctr--;
      // And swap the last element with it
      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
    }
    return arra1;
  }

  static getValueTopicIdLast():string{
    return sessionStorage.getItem(this.storageKeyTopicIdLast);
  }

  static setValueTopicIdLast(value:string){
    sessionStorage.setItem(this.storageKeyTopicIdLast,value);
  }

  static removeValueTopicIdLast(){
    sessionStorage.removeItem(this.storageKeyTopicIdLast);
  }
}
