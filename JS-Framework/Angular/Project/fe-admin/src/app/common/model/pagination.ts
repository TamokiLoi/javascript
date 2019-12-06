import { PaginationRow } from '../constant';

export class Pagination {
    links: Links;
    meta: Meta;
}

export class Links {
    first: string;
    last: string;
    next: string;
    prev: string;
}

export class Meta {
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    per_page: string;
    to: number;
    total: number;
}

export class ParamsPagination {
    page: number = 1;
    first: number;
    rows: number = PaginationRow.ROW[0];
    pageCount: number;
}

export class SortModel {
    sort_field: string;
    sort_type: string;
}
