export interface OrgChartDataObject {
    label: string,
    type: string,
    styleClass: string,
    expanded: boolean,
    data: {
        name: string;
        avatar: string;
    },
    key: string
}
