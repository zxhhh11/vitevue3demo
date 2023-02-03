export const styleContent = `#print-container {
    display: none;
}
@media print{
    body > :not(.print-container) {
        display: none;
    }
    html,
    body {
        display: block !important;
    }
    #print-container {
        display: block;
    }
    @page {
        margin: 0;
      }
    .table-main{
      padding: 20px 0;
    }
  .table-main table{
      border-spacing: 0;
      border-top: 1px solid #2a84c3;
      border-left: 1px solid #2a84c3;
      width: 90%;
      margin:2px;
  }
  .table-main tbody tr td{
      font-size: 8pt;
      text-align: center;
      background: #fff;
      color: #333;
      border-bottom: 1px solid #2a84c3;
      border-right: 1px solid #2a84c3;
  
  }
  .table-main tbody tr:hover td{
      background: #fbfab5;
  }
  .table-main tbody tr td.link{
    color: yellow;
    text-decoration: underline;
    cursor: pointer;
    font-weight: 600;
}
  .custom-table{
      margin-top: 30px;
      background: #F6F9FC;
  }
  .custom-table thead tr th{
      color: #005590;
      font-size: 8pt;
      border-bottom: 1px solid #2a84c3;
      border-right: 1px solid #2a84c3;
  
  }
  .custom-table thead tr{
      background: red;
  }
  .custom-table .print-header{
    text-align: center;
  }
  .printPage { 
    position: relative; 
    } 
    .printPage:before {
    position: absolute;z-index: 1000; content: 'xx水印'; top:30%; right: 25%; font-size: 48px; opacity: 0.6; transform: rotate(30deg);
    }
    .printPage:after {
    position: absolute;z-index: 1000; content: 'xx水印'; bottom:30%; left: 25%; font-size: 48px; opacity: 0.6;transform: rotate(30deg);
    }
  }
`