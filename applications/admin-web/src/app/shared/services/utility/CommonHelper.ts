export class CommonHelper {
    private static storageKeyScrollTopicSite = 'ScrollTopicSite';
    private static storageKeyQuestionTestPartEditing = 'QuestionTestPartEditing';
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

    static getValueScrollTopicSite(): string {
        return sessionStorage.getItem(this.storageKeyScrollTopicSite);
    }
    static setValueScrollTopicSite(value: string) {
        sessionStorage.setItem(this.storageKeyScrollTopicSite, value);
    }
    static removeValueScrollTopicSite() {
        sessionStorage.removeItem(this.storageKeyScrollTopicSite);
    }


    static getQuestionTestPartEditing(): string {
        return sessionStorage.getItem(this.storageKeyQuestionTestPartEditing);
    }
    static setQuestionTestPartEditing(value: string) {
        sessionStorage.setItem(this.storageKeyQuestionTestPartEditing, value);
    }
    static removeQuestionTestPartEditing() {
        sessionStorage.removeItem(this.storageKeyQuestionTestPartEditing);
    }

}
