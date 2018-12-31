import {Injectable} from '@angular/core';
import {GridOptions} from 'ag-grid-community';
import {ColumnDefinitionsFactoryService} from './column-definitions-factory.service';

@Injectable()
export class DefaultOptionsFactoryService {

  constructor(private columnDefinitionsFactory: ColumnDefinitionsFactoryService) {
  }

  public make(): GridOptions {
    return {
      columnDefs: this.columnDefinitionsFactory.make(),

      rowBuffer: 0,
      enableColResize: true,
      enableRangeSelection: false,
      enableFilter: true,
      animateRows: false,
      floatingFilter: false,
      enableSorting: false,

      rowDeselection: true,
      rowSelection: 'multiple',
      rowMultiSelectWithClick: false,

      suppressContextMenu: true,
      suppressColumnMoveAnimation: true,
      suppressMovableColumns: false,
      suppressDragLeaveHidesColumns: true,
      allowContextMenuWithControlKey: false,

      enterMovesDown: true,
      enterMovesDownAfterEdit: true,
      rowHeight: 25,
      // overlayLoadingTemplate: '<span class="ag-overlay-loading-center"><i class="fa fa-spinner fa-spin"></i></span>',
      // overlayNoRowsTemplate: `<span class="ag-overlay-no-rows-center">${noItemsMessage}</span>`,

      defaultColDef: {
        width: 80,
        minWidth: 80,
        icons: {
          filter: '<i class="fa fa-filter">',
          menu: '<i class="fa fa-bars">',
        },
        suppressMovable: true,
        suppressKeyboardEvent: (params) => params.event.ctrlKey || params.event.altKey,
      },
      // rowClassRules: {
      //   // Not 100% sure this is the correct type for params
      //   'grey-out-row': (params: ICellRendererParams) => {
      //     if (params.api == null) {
      //       return false;
      //     }
      //
      //     const filter = this.filterProvider.getFilter(params.api);
      //
      //     // filterCutoffPoint === 0 -> There are no filters
      //     // activeFilterResults === filterCutoffPoint -> Row passes all of the filters
      //     return filter.filterCutoffPoint !== 0 && filter.activeFilterResults[params.data.uid] !== filter.filterCutoffPoint;
      //   },
      //   'bom-row-read-only': (params: ICellRendererParams) => {
      //     if (params.api == null) {
      //       return false;
      //     }
      //     const bomItem = params.data && (params.data.item as IBomItem);
      //     return bomItem && bomItem.isReadonly;
      //   },
      // },
    };
  }
}
