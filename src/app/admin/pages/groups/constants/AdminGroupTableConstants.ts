export const AdminGroupTableConstants = {
    name: "Name",
}

type GroupTableKeys = keyof typeof AdminGroupTableConstants;
type GroupTableValues = typeof AdminGroupTableConstants[GroupTableKeys];

export const AdminGroupTableHeaderConstants: GroupTableValues[] = Object.values(AdminGroupTableConstants);