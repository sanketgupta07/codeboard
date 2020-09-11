export class Permission {
    constructor(
        public pull: boolean,
        public triage: boolean,
        public push: boolean,
        public maintain: boolean,
        public admin: boolean
    ){}
}