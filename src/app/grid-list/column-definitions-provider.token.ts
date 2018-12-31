import {ColDef} from 'ag-grid-community';
import {InjectionToken} from '@angular/core';

export const COLUMN_DEFINITIONS_TOKEN = new InjectionToken<ColDef[]>('ColumnDefinitionsToken');
