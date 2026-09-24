// ═══════════════════════════════════════════════════
//  DATA
// ═══════════════════════════════════════════════════

// ELQ-1 CKB assets keyed by node
const E1CKB_ASSETS = {
  ELQ1CKB001:[{xid:'XS30361696',sn:'8CC4310NTZ',type:'Computer',model:'HP Elite Mini 600 G9'},{xid:'XS30362767',sn:'CNC4010L90',type:'Monitor',model:'HP Series 3 Pro 322pf'},{xid:'XS30362799',sn:'CTM4012424100212',type:'Boarding Pass Printer (ATB)',model:'CUSTOM TK180'},{xid:'XS30362804',sn:'CTM4012424100224',type:'Boarding Tag Printer (BTP)',model:'CUSTOM TK180'},{xid:'XS30363476',sn:'24150B057B',type:'Laser Gun Reader (LSR)',model:'Honeywell 1400G'},{xid:'XS30362815',sn:'20242900469',type:'Passport Reader (OCR)',model:'DESKO R1201/00411'},{xid:'XS30362233',sn:'AS2334251587',type:'UPS',model:'APC Smart-UPS 1000VA'}],
  ELQ1CKB002:[{xid:'XS30361695',sn:'8CC4310NV3',type:'Computer',model:'HP Elite Mini 600 G9'},{xid:'XS30362768',sn:'CNC4010L8L',type:'Monitor',model:'HP Series 3 Pro 322pf'},{xid:'XS30362800',sn:'CTM4012424100170',type:'Boarding Pass Printer (ATB)',model:'CUSTOM TK180'},{xid:'XS30362798',sn:'CTM4012424100171',type:'Boarding Tag Printer (BTP)',model:'CUSTOM TK180'},{xid:'XS30362807',sn:'24150B03BE',type:'Laser Gun Reader (LSR)',model:'Honeywell 1400G'},{xid:'XS30362816',sn:'20242900290',type:'Passport Reader (OCR)',model:'DESKO R1201/00411'},{xid:'XS30362232',sn:'AS2334251602',type:'UPS',model:'APC Smart-UPS 1000VA'}],
  ELQ1CKB003:[{xid:'XS30361694',sn:'8CC4310NTY',type:'Computer',model:'HP Elite Mini 600 G9'},{xid:'XS30362776',sn:'CNC4010NV3',type:'Monitor',model:'HP Series 3 Pro 322pf'},{xid:'XS30362801',sn:'CTM4012424100209',type:'Boarding Pass Printer (ATB)',model:'CUSTOM TK180'},{xid:'XS30362797',sn:'CTM4012424100213',type:'Boarding Tag Printer (BTP)',model:'CUSTOM TK180'},{xid:'XS30362808',sn:'24150B0735',type:'Laser Gun Reader (LSR)',model:'Honeywell 1400G'},{xid:'XS30362817',sn:'20242900444',type:'Passport Reader (OCR)',model:'DESKO R1201/00411'},{xid:'XS30362228',sn:'AS2334251597',type:'UPS',model:'APC Smart-UPS 1000VA'}],
  ELQ1CKB004:[{xid:'XS30361693',sn:'8CC4310NV2',type:'Computer',model:'HP Elite Mini 600 G9'},{xid:'XS30362770',sn:'CNC4010L7J',type:'Monitor',model:'HP Series 3 Pro 322pf'},{xid:'XS30362802',sn:'CTM4012424100201',type:'Boarding Pass Printer (ATB)',model:'CUSTOM TK180'},{xid:'XS30362805',sn:'CTM4012424100172',type:'Boarding Tag Printer (BTP)',model:'CUSTOM TK180'},{xid:'XS30362809',sn:'24150B051A',type:'Laser Gun Reader (LSR)',model:'Honeywell 1400G'},{xid:'XS30362818',sn:'20242900447',type:'Passport Reader (OCR)',model:'DESKO R1201/00411'},{xid:'XS30362227',sn:'AS23341599',type:'UPS',model:'APC Smart-UPS 1000VA'}],
  ELQ1CKB005:[{xid:'XS30361692',sn:'8CC4310NV6',type:'Computer',model:'HP Elite Mini 600 G9'},{xid:'XS30362771',sn:'CNC4010L8G',type:'Monitor',model:'HP Series 3 Pro 322pf'},{xid:'XS30363247',sn:'CTM4007624060119',type:'Boarding Pass Printer (ATB)',model:'CUSTOM TK180'},{xid:'XS30363248',sn:'CTM4007624060121',type:'Boarding Tag Printer (BTP)',model:'CUSTOM TK180'},{xid:'XS30362810',sn:'24150B0458',type:'Laser Gun Reader (LSR)',model:'Honeywell 1400G'},{xid:'XS30362819',sn:'20242900259',type:'Passport Reader (OCR)',model:'DESKO R1201/00411'},{xid:'XS30362229',sn:'AS233421596',type:'UPS',model:'APC Smart-UPS 1000VA'}],
  ELQ1CKB006:[{xid:'XS30361691',sn:'8CC4310NV5',type:'Computer',model:'HP Elite Mini 600 G9'},{xid:'XS30362773',sn:'CNC4010L3L',type:'Monitor',model:'HP Series 3 Pro 322pf'},{xid:'XS30363249',sn:'CTM4012424100120',type:'Boarding Pass Printer (ATB)',model:'CUSTOM TK180'},{xid:'XS30362780',sn:'CTM4012424100208',type:'Boarding Tag Printer (BTP)',model:'CUSTOM TK180'},{xid:'XS30362811',sn:'24113B4178',type:'Laser Gun Reader (LSR)',model:'Honeywell 1400G'},{xid:'XS30362812',sn:'20242900451',type:'Passport Reader (OCR)',model:'DESKO R1201/00411'},{xid:'XS30362230',sn:'AS2417252054',type:'UPS',model:'APC Smart-UPS 1000VA'}],
  ELQ1CKB007:[{xid:'XS30361690',sn:'8CC4310NVB',type:'Computer',model:'HP Elite Mini 600 G9'},{xid:'XS30362777',sn:'CNC4010KTN',type:'Monitor',model:'HP Series 3 Pro 322pf'},{xid:'XS30363250',sn:'CTM4012424100176',type:'Boarding Pass Printer (ATB)',model:'CUSTOM TK180'},{xid:'XS30363251',sn:'CTM4007624060114',type:'Boarding Tag Printer (BTP)',model:'CUSTOM TK180'},{xid:'XS30362821',sn:'20242900452',type:'Passport Reader (OCR)',model:'DESKO R1201/00411'},{xid:'XS30362812',sn:'20242900501',type:'Laser Gun Reader (LSR)',model:'Honeywell 1400G'},{xid:'XS30362231',sn:'AS2417252060',type:'UPS',model:'APC Smart-UPS 1000VA'}],
  ELQ1CKB008:[{xid:'XS30361689',sn:'8CC4310NV8',type:'Computer',model:'HP Elite Mini 600 G9'},{xid:'XS30362774',sn:'CNC4010KWB',type:'Monitor',model:'HP Series 3 Pro 322pf'},{xid:'XS3036325',sn:'CTM4007624060122',type:'Boarding Pass Printer (ATB)',model:'CUSTOM TK180'},{xid:'XS3063253',sn:'CTM40012424100181',type:'Boarding Tag Printer (BTP)',model:'CUSTOM TK180'},{xid:'XS30362813',sn:'24113B173E',type:'Laser Gun Reader (LSR)',model:'Honeywell 1400G'},{xid:'XS3036822',sn:'20242900261',type:'Passport Reader (OCR)',model:'DESKO R1201/00411'},{xid:'XS30362226',sn:'AS2418363581',type:'UPS',model:'APC Smart-UPS 1000VA'}],
  ELQ1CKB009:[{xid:'XS30361688',sn:'8CC4310NV9',type:'Computer',model:'HP Elite Mini 600 G9'},{xid:'XS30361913',sn:'CNC4010L80',type:'Monitor',model:'HP Series 3 Pro 322pf'},{xid:'XS30363254',sn:'CTM4007624060113',type:'Boarding Pass Printer (ATB)',model:'CUSTOM TK180'},{xid:'XS30362806',sn:'CTM4007624100211',type:'Boarding Tag Printer (BTP)',model:'CUSTOM TK180'},{xid:'XS30362814',sn:'24113B00C5',type:'Laser Gun Reader (LSR)',model:'Honeywell 1400G'},{xid:'XS30362823',sn:'20242900449',type:'Passport Reader (OCR)',model:'DESKO R1201/00411'},{xid:'XS30362225',sn:'AS2334251588',type:'UPS',model:'APC Smart-UPS 1000VA'}],
};
const E1CKB_IPS = {ELQ1CKB001:'57.30.210.130',ELQ1CKB002:'57.30.210.131',ELQ1CKB003:'57.30.210.132',ELQ1CKB004:'57.30.210.133',ELQ1CKB005:'57.30.210.134',ELQ1CKB006:'57.30.210.135',ELQ1CKB007:'57.30.210.136',ELQ1CKB008:'57.30.210.137',ELQ1CKB009:'57.30.210.138'};

const E1GTU_ASSETS = {
  ELQ1GTU001:[{xid:'XS30361886',sn:'8CC416241Y',type:'Computer',model:'HP Elite Mini 600 G9'},{xid:'XS30361912',sn:'CNC4010KTW',type:'Monitor',model:'HP Series 3 Pro 322pf'},{xid:'XS30362803',sn:'CTM4012424100190',type:'Boarding Pass Printer (ATB)',model:'CUSTOM TK180'},{xid:'XS30363255',sn:'CTM4012424060115',type:'Boarding Tag Printer (BTP)',model:'CUSTOM TK180'},{xid:'XS30362828',sn:'20242900189',type:'Boarding Gate Reader (BGR)',model:'DESKO BGR504 PRO'},{xid:'XS30362782',sn:'895024180094',type:'Document Printer (DCP)',model:'Tally DASCOM 1145'},{xid:'XS30362824',sn:'2024290043',type:'Passport Reader (OCR)',model:'DESKO R1201/00411'},{xid:'XS30362224',sn:'AS2334251091',type:'UPS',model:'APC Smart-UPS 1000VA'}],
  ELQ1GTU002:[{xid:'XS30361885',sn:'8CC4163020',type:'Computer',model:'HP Elite Mini 600 G9'},{xid:'XS30361911',sn:'CNC4010KT8',type:'Monitor',model:'HP Series 3 Pro 322pf'},{xid:'XS30363256',sn:'CTM4007624060117',type:'Boarding Pass Printer (ATB)',model:'CUSTOM TK180'},{xid:'XS30363259',sn:'CTM400764060118',type:'Boarding Tag Printer (BTP)',model:'CUSTOM TK180'},{xid:'XS30362783',sn:'895024180054',type:'Document Printer (DCP)',model:'Tally DASCOM 1145'},{xid:'XS30362829',sn:'20242900253',type:'Boarding Gate Reader (BGR)',model:'DESKO BGR504 PRO'},{xid:'XS30362525',sn:'20242900295',type:'Passport Reader (OCR)',model:'DESKO R1201/00411'},{xid:'XS30362223',sn:'AS2334251589',type:'UPS',model:'APC Smart-UPS 1000VA'}],
  ELQ1GTU003:[{xid:'XS30361884',sn:'8CC4162419',type:'Computer',model:'HP Elite Mini 600 G9'},{xid:'XS30362775',sn:'CNC4010KVH',type:'Monitor',model:'HP Series 3 Pro 322pf'},{xid:'XS30363258',sn:'CTM40012424100183',type:'Boarding Pass Printer (ATB)',model:'CUSTOM TK180'},{xid:'XS30363257',sn:'CTM40012424100116',type:'Boarding Tag Printer (BTP)',model:'CUSTOM TK180'},{xid:'XS30362784',sn:'895024180079',type:'Document Printer (DCP)',model:'Tally DASCOM 1145'},{xid:'XS30362781',sn:'20242900184',type:'Boarding Gate Reader (BGR)',model:'DESKO BGR504 PRO'},{xid:'XS30362826',sn:'20242900431',type:'Passport Reader (OCR)',model:'DESKO R1201/00411'},{xid:'XS30362222',sn:'AS2334251615',type:'UPS',model:'APC Smart-UPS 1000VA'}],
  ELQ1GTU004:[{xid:'XS30361881',sn:'8CC416241M',type:'Monitor',model:'HP Series 3 Pro 322pf'},{xid:'XS30362769',sn:'CNC4010KW7',type:'Computer',model:'HP Elite Mini 600 G9'},{xid:'XS30363260',sn:'CTM400764060120',type:'Boarding Pass Printer (ATB)',model:'CUSTOM TK180'},{xid:'XS30363261',sn:'CTM4012424100116',type:'Boarding Tag Printer (BTP)',model:'CUSTOM TK180'},{xid:'XS30362785',sn:'895024180076',type:'Document Printer (DCP)',model:'Tally DASCOM 1145'},{xid:'XS30362830',sn:'20242900234',type:'Boarding Gate Reader (BGR)',model:'DESKO BGR504 PRO'},{xid:'XS30362827',sn:'20242900460',type:'Passport Reader (OCR)',model:'DESKO R1201/00411'},{xid:'XS30362221',sn:'AS2334251592',type:'UPS',model:'APC Smart-UPS 1000VA'}],
};
const E1GTU_IPS = {ELQ1GTU001:'57.30.210.157',ELQ1GTU002:'57.30.210.154',ELQ1GTU003:'57.30.210.155',ELQ1GTU004:'57.30.210.138'};

// ELQ-2 CKB flattened
const E2CKB_ROWS = [
  {node:'ELQ2CKB001',ip:'57.1.174.210',type:'Computer',sn:'8CC3200SSX',model:'HP Elite Mini 600 G9'},
  {node:'ELQ2CKB001',ip:'57.1.174.210',type:'Monitor',sn:'CNK3020RLF',model:'HP Series 3 Pro 322pf'},
  {node:'ELQ2CKB001',ip:'57.1.174.210',type:'Boarding Pass Printer (ATB)',sn:'MEC3008823110425',model:'CUSTOM TK180'},
  {node:'ELQ2CKB001',ip:'57.1.174.210',type:'Boarding Tag Printer (BTP)',sn:'MEC3008823110315',model:'CUSTOM TK180'},
  {node:'ELQ2CKB001',ip:'57.1.174.210',type:'Passport Reader (OCR)',sn:'3160001681',model:'DESKO R1201/00411'},
  {node:'ELQ2CKB002',ip:'57.1.174.214',type:'Computer',sn:'8CC3200SSW',model:'HP Elite Mini 600 G9'},
  {node:'ELQ2CKB002',ip:'57.1.174.214',type:'Monitor',sn:'CNK3020RLN',model:'HP Series 3 Pro 322pf'},
  {node:'ELQ2CKB002',ip:'57.1.174.214',type:'Boarding Pass Printer (ATB)',sn:'MEC30030023110080',model:'CUSTOM TK180'},
  {node:'ELQ2CKB002',ip:'57.1.174.214',type:'Boarding Tag Printer (BTP)',sn:'MEC3008823110322',model:'CUSTOM TK180'},
  {node:'ELQ2CKB002',ip:'57.1.174.214',type:'Passport Reader (OCR)',sn:'3160001675',model:'DESKO R1201/00411'},
  {node:'ELQ2CKB003',ip:'57.1.174.203',type:'Computer',sn:'8CC3200SSV',model:'HP Elite Mini 600 G9'},
  {node:'ELQ2CKB003',ip:'57.1.174.203',type:'Monitor',sn:'CNK3020RLP',model:'HP Series 3 Pro 322pf'},
  {node:'ELQ2CKB003',ip:'57.1.174.203',type:'Boarding Pass Printer (ATB)',sn:'MEC30030023110203',model:'CUSTOM TK180'},
  {node:'ELQ2CKB003',ip:'57.1.174.203',type:'Boarding Tag Printer (BTP)',sn:'MEC3008823110508',model:'CUSTOM TK180'},
  {node:'ELQ2CKB003',ip:'57.1.174.203',type:'Passport Reader (OCR)',sn:'3160001702',model:'DESKO R1201/00411'},
  {node:'ELQ2CKB004',ip:'57.1.174.207',type:'Computer',sn:'8CC3200SST',model:'HP Elite Mini 600 G9'},
  {node:'ELQ2CKB004',ip:'57.1.174.207',type:'Monitor',sn:'CNK3020RLM',model:'HP Series 3 Pro 322pf'},
  {node:'ELQ2CKB004',ip:'57.1.174.207',type:'Boarding Pass Printer (ATB)',sn:'MEC30030023110431',model:'CUSTOM TK180'},
  {node:'ELQ2CKB004',ip:'57.1.174.207',type:'Boarding Tag Printer (BTP)',sn:'MEC300882311733',model:'CUSTOM TK180'},
  {node:'ELQ2CKB004',ip:'57.1.174.207',type:'Passport Reader (OCR)',sn:'3160001922',model:'DESKO R1201/00411'},
  {node:'ELQ2CKB005',ip:'57.1.174.196',type:'Computer',sn:'8CC3200SSR',model:'HP Elite Mini 600 G9'},
  {node:'ELQ2CKB005',ip:'57.1.174.196',type:'Monitor',sn:'CNK3020RLZ',model:'HP Series 3 Pro 322pf'},
  {node:'ELQ2CKB005',ip:'57.1.174.196',type:'Boarding Pass Printer (ATB)',sn:'MEC30030023110410',model:'CUSTOM TK180'},
  {node:'ELQ2CKB005',ip:'57.1.174.196',type:'Boarding Tag Printer (BTP)',sn:'CPE6639316210026',model:'CUSTOM TK180'},
  {node:'ELQ2CKB005',ip:'57.1.174.196',type:'Passport Reader (OCR)',sn:'1616219549',model:'DESKO R1201/00411'},
  {node:'ELQ2CKB006',ip:'57.1.174.200',type:'Computer',sn:'8CC3200SSS',model:'HP Elite Mini 600 G9'},
  {node:'ELQ2CKB006',ip:'57.1.174.200',type:'Monitor',sn:'CNK3020SWW',model:'HP Series 3 Pro 322pf'},
  {node:'ELQ2CKB006',ip:'57.1.174.200',type:'Boarding Pass Printer (ATB)',sn:'MEC38823110271',model:'CUSTOM TK180'},
  {node:'ELQ2CKB006',ip:'57.1.174.200',type:'Boarding Tag Printer (BTP)',sn:'MEC3008823110536',model:'CUSTOM TK180'},
  {node:'ELQ2CKB006',ip:'57.1.174.200',type:'Passport Reader (OCR)',sn:'3160001695',model:'DESKO R1201/00411'},
  {node:'ELQ2CKB007',ip:'57.1.174.201',type:'Computer',sn:'8CC3200SSK',model:'HP Elite Mini 600 G9'},
  {node:'ELQ2CKB007',ip:'57.1.174.201',type:'Monitor',sn:'CNK3020RLQ',model:'HP Series 3 Pro 322pf'},
  {node:'ELQ2CKB007',ip:'57.1.174.201',type:'Boarding Pass Printer (ATB)',sn:'MEC38823110321',model:'CUSTOM TK180'},
  {node:'ELQ2CKB007',ip:'57.1.174.201',type:'Boarding Tag Printer (BTP)',sn:'MEC3008823110326',model:'CUSTOM TK180'},
  {node:'ELQ2CKB007',ip:'57.1.174.201',type:'Passport Reader (OCR)',sn:'3160001596',model:'DESKO R1201/00411'},
  {node:'ELQ2CKB008',ip:'57.1.174.208',type:'Computer',sn:'8CC3200SSJ',model:'HP Elite Mini 600 G9'},
  {node:'ELQ2CKB008',ip:'57.1.174.208',type:'Monitor',sn:'CNK3020RKH',model:'HP Series 3 Pro 322pf'},
  {node:'ELQ2CKB008',ip:'57.1.174.208',type:'Boarding Pass Printer (ATB)',sn:'MEC38823110535',model:'CUSTOM TK180'},
  {node:'ELQ2CKB008',ip:'57.1.174.208',type:'Boarding Tag Printer (BTP)',sn:'MEC3008823110306',model:'CUSTOM TK180'},
  {node:'ELQ2CKB008',ip:'57.1.174.208',type:'Passport Reader (OCR)',sn:'3160001609',model:'DESKO R1201/00411'},
  {node:'ELQ2CKB009',ip:'57.1.174.212',type:'Computer',sn:'8CC3200SSL',model:'HP Elite Mini 600 G9'},
  {node:'ELQ2CKB009',ip:'57.1.174.212',type:'Monitor',sn:'CNK3020RLY',model:'HP Series 3 Pro 322pf'},
  {node:'ELQ2CKB009',ip:'57.1.174.212',type:'Boarding Pass Printer (ATB)',sn:'MEC38823110526',model:'CUSTOM TK180'},
  {node:'ELQ2CKB009',ip:'57.1.174.212',type:'Boarding Tag Printer (BTP)',sn:'MEC3008823110525',model:'CUSTOM TK180'},
  {node:'ELQ2CKB009',ip:'57.1.174.212',type:'Passport Reader (OCR)',sn:'3160001655',model:'DESKO R1201/00411'},
];

const E2GTU_ROWS = [
  {node:'ELQ2GTU001',ip:'57.1.174.202',type:'Computer',sn:'8CC3200SSC',model:'HP Elite Mini 600 G9'},{node:'ELQ2GTU001',ip:'57.1.174.202',type:'Monitor',sn:'CNK3020RKG',model:'HP Series 3 Pro 322pf'},{node:'ELQ2GTU001',ip:'57.1.174.202',type:'Boarding Pass Printer (ATB)',sn:'MEC3008823110526',model:'CUSTOM TK180'},{node:'ELQ2GTU001',ip:'57.1.174.202',type:'Boarding Gate Reader (BGR)',sn:'1852251690',model:'DESKO BGR504 PRO'},{node:'ELQ2GTU001',ip:'57.1.174.202',type:'Document Printer (DCP)',sn:'X3YN003025',model:'EPSON FX-890II'},
  {node:'ELQ2GTU002',ip:'57.1.174.206',type:'Computer',sn:'8CC3200SSG',model:'HP Elite Mini 600 G9'},{node:'ELQ2GTU002',ip:'57.1.174.206',type:'Monitor',sn:'CNK3020RLX',model:'HP Series 3 Pro 322pf'},{node:'ELQ2GTU002',ip:'57.1.174.206',type:'Boarding Pass Printer (ATB)',sn:'MEC38823110507',model:'CUSTOM TK180'},{node:'ELQ2GTU002',ip:'57.1.174.206',type:'Boarding Gate Reader (BGR)',sn:'1852251690',model:'ACCESS BGR 135'},{node:'ELQ2GTU002',ip:'57.1.174.206',type:'Document Printer (DCP)',sn:'X3YN002974',model:'EPSON FX-890II'},
  {node:'ELQ2GTU003',ip:'57.1.174.205',type:'Computer',sn:'8CC3200SSP',model:'HP Elite Mini 600 G9'},{node:'ELQ2GTU003',ip:'57.1.174.205',type:'Monitor',sn:'CNK3020SWP',model:'HP Series 3 Pro 322pf'},{node:'ELQ2GTU003',ip:'57.1.174.205',type:'Boarding Pass Printer (ATB)',sn:'MEC38823110316',model:'CUSTOM TK180'},{node:'ELQ2GTU003',ip:'57.1.174.205',type:'Boarding Gate Reader (BGR)',sn:'1852251687',model:'ACCESS BGR 135'},{node:'ELQ2GTU003',ip:'57.1.174.205',type:'Document Printer (DCP)',sn:'X3YN002974',model:'EPSON FX-890II'},
  {node:'ELQ2GTU004',ip:'57.1.174.199',type:'Computer',sn:'8CC3200SSF',model:'HP Elite Mini 600 G9'},{node:'ELQ2GTU004',ip:'57.1.174.199',type:'Monitor',sn:'CNK3020RL1',model:'HP Series 3 Pro 322pf'},{node:'ELQ2GTU004',ip:'57.1.174.199',type:'Boarding Pass Printer (ATB)',sn:'MEC38823110204',model:'CUSTOM TK180'},{node:'ELQ2GTU004',ip:'57.1.174.199',type:'Boarding Gate Reader (BGR)',sn:'1852251689',model:'ACCESS BGR 135'},{node:'ELQ2GTU004',ip:'57.1.174.199',type:'Document Printer (DCP)',sn:'X3YN002973',model:'EPSON FX-890II'},
  {node:'ELQ2GTU005',ip:'57.1.174.220',type:'Computer',sn:'8CC3200SSF',model:'HP Elite Mini 600 G9'},{node:'ELQ2GTU005',ip:'57.1.174.220',type:'Monitor',sn:'CNK3020RLL',model:'HP Series 3 Pro 322pf'},{node:'ELQ2GTU005',ip:'57.1.174.220',type:'Boarding Pass Printer (ATB)',sn:'MEC3008823110079',model:'CUSTOM TK180'},{node:'ELQ2GTU005',ip:'57.1.174.220',type:'Boarding Gate Reader (BGR)',sn:'1617220626',model:'ACCESS BGR 135'},
  {node:'ELQ2GTU006',ip:'57.1.174.209',type:'Computer',sn:'8CC3200SSN',model:'HP Elite Mini 600 G9'},{node:'ELQ2GTU006',ip:'57.1.174.209',type:'Monitor',sn:'CNK3020SWW',model:'HP Series 3 Pro 322pf'},{node:'ELQ2GTU006',ip:'57.1.174.209',type:'Boarding Pass Printer (ATB)',sn:'MEC3882311020',model:'CUSTOM TK180'},{node:'ELQ2GTU006',ip:'57.1.174.209',type:'Boarding Gate Reader (BGR)',sn:'8CC3200SSF',model:'DESKO BGR504 PRO'},{node:'ELQ2GTU006',ip:'57.1.174.209',type:'Document Printer (DCP)',sn:'X3TN003165',model:'EPSON FX-890II'},{node:'ELQ2GTU006',ip:'57.1.174.209',type:'LaserJet Printer',sn:'PHCBR5H1DW',model:'LaserJet Enterprise M507'},
];

// ELQ-1 DDC grouped by type
const E1DDC_GROUPS = {
  'CK-DDC':{label:'CK-DDC — Check-In Display Controllers',color:'var(--a)',rows:[
    {node:'ELQ1-CK-DDC001',ip:'10.123.220.17',xid:'XS30362235',sn:'403INYDAF738',loc:'CHK-IN Counter 1'},
    {node:'ELQ1-CK-DDC002',ip:'10.123.220.24',xid:'XS30362236',sn:'403INNGAF775',loc:'CHK-IN Counter 2'},
    {node:'ELQ1-CK-DDC003',ip:'10.123.220.23',xid:'XS30362237',sn:'403INEWD5372',loc:'CHK-IN Counter 3'},
    {node:'ELQ1-CK-DDC004',ip:'10.123.220.22',xid:'XS30362238',sn:'403INYDAF810',loc:'CHK-IN Counter 4'},
    {node:'ELQ1-CK-DDC005',ip:'10.123.220.21',xid:'XS30362239',sn:'403INPTAF664',loc:'CHK-IN Counter 5'},
    {node:'ELQ1-CK-DDC006',ip:'10.123.220.20',xid:'XS30362240',sn:'403INYDAF666',loc:'CHK-IN Counter 6'},
    {node:'ELQ1-CK-DDC007',ip:'10.123.220.19',xid:'XS30362241',sn:'403INYRCD5454',loc:'CHK-IN Counter 7'},
    {node:'ELQ1-CK-DDC008',ip:'10.123.220.18',xid:'XS30362242',sn:'403INQUAF812',loc:'CHK-IN Counter 8'},
    {node:'ELQ1-CK-DDC009',ip:'10.123.220.25',xid:'XS30362234',sn:'403INHZAF665',loc:'CHK-IN Counter 9'},
    {node:'ELQ1-CK-DDC010',ip:'172.27.56.144',xid:'—',sn:'—',loc:'CHK-IN Counter 10'},
  ]},
  'GT-DDC':{label:'GT-DDC — Gate Display Controllers',color:'var(--tel)',rows:[
    {node:'ELQ1-GT-DDC001',ip:'172.27.56.144',xid:'XS30362220',sn:'403INQUAF740',loc:'Gate 1 DOM Dept'},
    {node:'ELQ1-GT-DDC002',ip:'172.27.56.145',xid:'XS30362243',sn:'403INCNAF811',loc:'Gate 2 DOM Dept'},
    {node:'ELQ1-GT-DDC003',ip:'172.27.56.146',xid:'XS30362244',sn:'403INXJD5450',loc:'Gate 3 DOM Intl'},
    {node:'ELQ1-GT-DDC004',ip:'172.27.56.147',xid:'XS30362245',sn:'403INHZD5457',loc:'Gate 4 DOM Intl'},
  ]},
  'AC-DDC':{label:'AC-DDC — Arrival Concourse Display Controllers',color:'var(--grn)',rows:[
    {node:'ELQ1-AC-DDC001',ip:'10.123.220.34',xid:'XS30362247',sn:'403INCND5459',loc:'Public Monitor 1 Arr'},
    {node:'ELQ1-AC-DDC002',ip:'10.123.220.35',xid:'XS30362249',sn:'403INYDD5458',loc:'Public Monitor 2 Arr'},
    {node:'ELQ1-AC-DDC003',ip:'10.123.220.36',xid:'XS30362251',sn:'403INBSD5453',loc:'Car Rent Counter'},
    {node:'ELQ1-AC-DDC004',ip:'10.123.220.37',xid:'XS30362252',sn:'403INMFD5443',loc:'SNB Bank Front'},
  ]},
  'AT-DDC':{label:'AT-DDC — Transfer Area Display Controllers',color:'var(--tel)',rows:[
    {node:'ELQ1-AT-DDC001',ip:'10.123.220.40',xid:'XS30362248',sn:'403INPTD5456',loc:'Airside Operation'},
    {node:'ELQ1-AT-DDC002',ip:'10.123.220.62',xid:'XS30362254',sn:'403INQUD5436',loc:'Operation Manager Office'},
    {node:'ELQ1-AT-DDC003',ip:'10.123.220.31',xid:'XS30362253',sn:'403INWAD5449',loc:'Admin Building'},
    {node:'ELQ1-AT-DDC004',ip:'10.123.220.32',xid:'XS30362255',sn:'403INDPD5442',loc:'Admin Building'},
    {node:'ELQ1-AT-DDC005',ip:'10.123.220.41',xid:'XS30362262',sn:'403INSEAF646',loc:'Admin Building'},
    {node:'ELQ1-AT-DDC006',ip:'10.123.220.61',xid:'XS30362261',sn:'403INZYD5437',loc:'Admin Building'},
    {node:'ELQ1-AT-DDC007',ip:'10.123.220.63',xid:'XS30362263',sn:'403INRCD5430',loc:'Operation Manager Office'},
  ]},
  'DC-DDC':{label:'DC-DDC — CHK-IN Public Monitor Controllers',color:'var(--pur)',rows:[
    {node:'ELQ1-DC-DDC001',ip:'10.123.220.42',xid:'XS30362256',sn:'403INARD5448',loc:'DEP 1 CHK-IN Public Monitor'},
    {node:'ELQ1-DC-DDC002',ip:'10.123.220.43',xid:'XS30362258',sn:'403INJLD5452',loc:'DEP 2 CHK-IN Public Monitor'},
    {node:'ELQ1-DC-DDC003',ip:'10.123.220.44',xid:'XS30362257',sn:'403INKHAF773',loc:'DEP 3 CHK-IN Public Monitor'},
  ]},
  'DG-DDC':{label:'DG-DDC — Departure Gate Display Controllers',color:'var(--gold)',rows:[
    {node:'ELQ1-DG-DDC001',ip:'10.123.220.45',xid:'XS30362259',sn:'403INDPAF770',loc:'Final Dept 1 Dom'},
    {node:'ELQ1-DG-DDC002',ip:'172.27.56.165',xid:'XS30362260',sn:'403INARAF656',loc:'Final Dept 2 Dom'},
    {node:'ELQ1-DG-DDC003',ip:'172.27.56.166',xid:'XS30362272',sn:'403INFKD5451',loc:'Final Dept 3 Dom'},
    {node:'ELQ1-DG-DDC004',ip:'172.27.56.167',xid:'XS30362273',sn:'403INZYD5461',loc:'Final Dept 4 Dom'},
    {node:'ELQ1-DG-DDC005',ip:'172.27.56.168',xid:'XS30362264',sn:'403INCNAF739',loc:'Final Dept 1 Intl'},
    {node:'ELQ1-DG-DDC006',ip:'172.27.56.169',xid:'XS30362265',sn:'403INUBAF774',loc:'Final Dept 2 Intl'},
    {node:'ELQ1-DG-DDC007',ip:'172.27.56.170',xid:'XS30362266',sn:'403INDPAF746',loc:'Final Dept 3 Intl'},
    {node:'ELQ1-DG-DDC008',ip:'172.27.56.171',xid:'XS30362268',sn:'403INMFAF747',loc:'Final Dept 4 Intl'},
    {node:'ELQ1-DG-DDC009',ip:'172.27.56.172',xid:'XS30362267',sn:'403INTXAF649',loc:'Final Dept 5 Intl'},
  ]},
  'VP-DDC':{label:'VP-DDC — Executive Lounge Display Controllers',color:'var(--red)',rows:[
    {node:'ELQ1-VP-DDC001',ip:'10.123.220.57',xid:'—',sn:'403INJLAF684',loc:'Executive Lounge'},
    {node:'ELQ1-VP-DDC002',ip:'172.27.56.176',xid:'—',sn:'403INLVAF648',loc:'Executive Lounge'},
    {node:'ELQ1-VP-DDC003',ip:'10.123.220.59',xid:'—',sn:'405INJLCC803',loc:'Executive Lounge'},
  ]},
  'LG-DDC':{label:'LG-DDC — Lounge Display Controllers',color:'var(--tel)',rows:[
    {node:'ELQ1-LG-DDC001',ip:'10.123.220.64',xid:'XS30362271',sn:'403INHZAF737',loc:'First Class Lounge DOM'},
    {node:'ELQ1-LG-DDC002',ip:'10.123.220.60',xid:'—',sn:'—',loc:'First Class Lounge Intl'},
  ]},
  'BI-DDC':{label:'BI-DDC — Baggage Inbound Display',color:'var(--grn)',rows:[
    {node:'ELQ1-BI-DDC001',ip:'10.123.220.30',xid:'XS30362246',sn:'403INARAF776',loc:'Belt 2 Intl Arr'},
  ]},
  'BD-DDC':{label:'BD-DDC — Bag Drop Display',color:'var(--tel)',rows:[
    {node:'ELQ1-BD-DDC001',ip:'10.123.220.33',xid:'XS30362250',sn:'403INTXD5441',loc:'Belt 1 DOM Arr'},
  ]},
};

// ELQ-2 DDC grouped
const E2DDC_GROUPS = {
  'CK-DDC':{label:'CK-DDC — Check-In Display Controllers',color:'var(--a)',rows:[
    {node:'ELQ2-CK-DDC001',ip:'172.27.62.80',xid:'XS00939228',sn:'34102140NB',loc:'CHK-IN Counter 1'},
    {node:'ELQ2-CK-DDC002',ip:'172.27.62.81',xid:'XS00939227',sn:'34102147NB',loc:'CHK-IN Counter 2'},
    {node:'ELQ2-CK-DDC003',ip:'172.27.62.82',xid:'XS00939226',sn:'34102135NB',loc:'CHK-IN Counter 3'},
    {node:'ELQ2-CK-DDC004',ip:'172.27.62.83',xid:'XS00939225',sn:'34102137NB',loc:'CHK-IN Counter 4'},
    {node:'ELQ2-CK-DDC005',ip:'172.27.62.84',xid:'XS00939224',sn:'34102143NB',loc:'CHK-IN Counter 5'},
    {node:'ELQ2-CK-DDC006',ip:'172.27.62.85',xid:'XS00939223',sn:'34102148NB',loc:'CHK-IN Counter 6'},
    {node:'ELQ2-CK-DDC007',ip:'172.27.62.86',xid:'XS00939222',sn:'34102138NB',loc:'CHK-IN Counter 7'},
    {node:'ELQ2-CK-DDC008',ip:'172.27.62.87',xid:'XS00939221',sn:'34102132NB',loc:'CHK-IN Counter 8'},
    {node:'ELQ2-CK-DDC009',ip:'172.27.62.88',xid:'XS00936848',sn:'34102134NB',loc:'CHK-IN Counter 9'},
    {node:'ELQ2-CK-DDC010',ip:'172.27.62.89',xid:'XS00936847',sn:'34102133NB',loc:'CHK-IN Counter 10'},
    {node:'ELQ2-CK-DDC011',ip:'172.27.62.90',xid:'XS00936846',sn:'34102139NB',loc:'CHK-IN Counter 11'},
  ]},
  'DC-DDC':{label:'DC-DDC — CHK-IN Public Monitor / Well Wishers',color:'var(--pur)',rows:[
    {node:'ELQ2-DC-DDC001',ip:'172.27.62.71',xid:'XS30352786',sn:'32115674NB',loc:'DEP 1 CHK-IN Public Monitor'},
    {node:'ELQ2-DC-DDC002',ip:'172.27.62.72',xid:'XS30352785',sn:'32115656NB',loc:'DEP 1 CHK-IN Public Monitor'},
    {node:'ELQ2-DC-DDC003',ip:'172.27.62.73',xid:'XS30352784',sn:'32115734NB',loc:'DEP 1 CHK-IN Public Monitor'},
    {node:'ELQ2-DC-DDC004',ip:'172.27.62.74',xid:'XS30352783',sn:'32115765NB',loc:'DEP 1 CHK-IN Public Monitor'},
    {node:'ELQ2-DC-DDC005',ip:'172.27.62.75',xid:'XS30352782',sn:'32115645NB',loc:'DEP 1 CHK-IN Public Monitor'},
    {node:'ELQ2-DC-DDC006',ip:'172.27.62.76',xid:'XS30352781',sn:'32115775NB',loc:'DEP 1 CHK-IN Public Monitor'},
    {node:'ELQ2-DC-DDC007',ip:'172.27.62.77',xid:'XS30352780',sn:'32115605NB',loc:'DEP 1 CHK-IN Public Monitor'},
    {node:'ELQ2-DC-DDC008',ip:'172.27.62.78',xid:'XS30352779',sn:'32115657NB',loc:'DEP 1 CHK-IN Public Monitor'},
    {node:'ELQ2-DC-DDC009',ip:'172.27.62.79',xid:'XS30352778',sn:'32115730NB',loc:'Check-in / Well Wishers'},
    {node:'ELQ2-DC-DDC010',ip:'172.27.62.91',xid:'XS30352777',sn:'32115794NB',loc:'DEP 1 CHK-IN Public Monitor'},
    {node:'ELQ2-DC-DDC011',ip:'172.27.62.92',xid:'XS30352776',sn:'32115638NB',loc:'DEP 1 CHK-IN Public Monitor'},
    {node:'ELQ2-DC-DDC012',ip:'172.27.62.93',xid:'XS30352775',sn:'32115637NB',loc:'DEP 1 CHK-IN Public Monitor'},
    {node:'ELQ2-DC-DDC013',ip:'172.27.62.94',xid:'XS30352774',sn:'32115590NB',loc:'DEP 1 CHK-IN Public Monitor'},
  ]},
  'DG-DDC':{label:'DG-DDC — Domestic Departure Gate Display',color:'var(--gold)',rows:[
    {node:'ELQ2-DG-DDC001',ip:'172.27.62.95',xid:'XS30352773',sn:'32115649NB',loc:'Domestic Departure Lounge'},
    {node:'ELQ2-DG-DDC002',ip:'172.27.62.96',xid:'XS30352772',sn:'32115722NB',loc:'Domestic Departure Lounge'},
    {node:'ELQ2-DG-DDC003',ip:'172.27.62.97',xid:'XS30352771',sn:'32115639NB',loc:'Domestic Departure Lounge'},
    {node:'ELQ2-DG-DDC004',ip:'172.27.62.98',xid:'XS30352770',sn:'3211671NB',loc:'Domestic Departure Lounge'},
    {node:'ELQ2-DG-DDC005',ip:'172.27.62.99',xid:'XS00939249',sn:'32115636NB',loc:'Domestic Departure Lounge'},
    {node:'ELQ2-DG-DDC006',ip:'172.27.62.100',xid:'XS00939248',sn:'32115764NB',loc:'Domestic Departure Lounge'},
    {node:'ELQ2-DG-DDC007',ip:'172.27.62.101',xid:'XS00939247',sn:'32115796NB',loc:'Domestic Departure Lounge'},
    {node:'ELQ2-DG-DDC008',ip:'172.27.62.102',xid:'XS00939246',sn:'32115816NB',loc:'Domestic Departure Lounge'},
    {node:'ELQ2-DG-DDC009',ip:'172.27.62.103',xid:'XS00939245',sn:'32115640NB',loc:'Domestic Departure Lounge'},
    {node:'ELQ2-DG-DDC010',ip:'172.27.62.104',xid:'XS00939244',sn:'32115591NB',loc:'Domestic Departure Lounge'},
    {node:'ELQ2-DG-DDC011',ip:'172.27.62.105',xid:'XS00939243',sn:'32115799NB',loc:'Domestic Departure Lounge'},
    {node:'ELQ2-DG-DDC012',ip:'172.27.62.106',xid:'XS00939242',sn:'32115604NB',loc:'Domestic Departure Lounge'},
    {node:'ELQ2-DG-DDC013',ip:'172.27.62.107',xid:'XS00939241',sn:'32115615NB',loc:'Domestic Departure Lounge'},
    {node:'ELQ2-DG-DDC014',ip:'172.27.62.108',xid:'XS00939240',sn:'32115606NB',loc:'Domestic Departure Lounge'},
    {node:'ELQ2-DG-DDC015',ip:'172.27.62.109',xid:'XS00939239',sn:'32115857NB',loc:'Domestic Departure Lounge'},
    {node:'ELQ2-DG-DDC016',ip:'172.27.62.110',xid:'XS00939238',sn:'32115842NB',loc:'Domestic Departure Lounge'},
    {node:'ELQ2-DG-DDC017',ip:'172.27.62.111',xid:'XS00939237',sn:'32115704NB',loc:'Domestic Departure Lounge'},
  ]},
  'AC-DDC':{label:'AC-DDC — Arrival Concourse Display Controllers',color:'var(--grn)',rows:[
    {node:'ELQ2-AC-DDC001',ip:'172.27.62.112',xid:'XS00939236',sn:'32115802NB',loc:'Public Monitor 1 Arr'},
    {node:'ELQ2-AC-DDC002',ip:'172.27.62.113',xid:'XS00939235',sn:'32115800NB',loc:'Public Monitor 1 Arr'},
    {node:'ELQ2-AC-DDC003',ip:'172.27.62.114',xid:'XS00939234',sn:'32115886NB',loc:'Public Monitor 1 Arr'},
    {node:'ELQ2-AC-DDC004',ip:'172.27.62.115',xid:'XS00939233',sn:'32115801NB',loc:'Public Monitor 1 Arr'},
    {node:'ELQ2-AC-DDC005',ip:'172.27.62.116',xid:'XS00939232',sn:'32115635NB',loc:'Public Monitor 1 Arr'},
    {node:'ELQ2-AC-DDC006',ip:'172.27.62.117',xid:'XS00939231',sn:'32115727NB',loc:'Public Monitor 1 Arr'},
    {node:'ELQ2-AC-DDC007',ip:'172.27.62.118',xid:'XS00939230',sn:'32115707NB',loc:'Public Monitor 1 Arr'},
    {node:'ELQ2-AC-DDC008',ip:'172.27.62.119',xid:'XS00939229',sn:'32115705NB',loc:'Public Monitor 1 Arr'},
  ]},
};

// All FIDS for table view

const SWITCHES = [
  {name:'ELQ1-SSS-01',room:'Core Room 5',ports:[
    {port:'G1',dev:'AMS VASL-ILOG',ip:''},{port:'G2',dev:'—',ip:''},{port:'G3',dev:'—',ip:''},{port:'G4',dev:'—',ip:''},{port:'G5',dev:'—',ip:''},{port:'G6',dev:'—',ip:''},
    {port:'G7',dev:'AMS CORE',ip:''},{port:'G8',dev:'—',ip:''},{port:'G9',dev:'—',ip:''},{port:'G10',dev:'—',ip:''},{port:'G11',dev:'—',ip:''},{port:'G12',dev:'—',ip:''},
    {port:'G13',dev:'PFMN01-ILOG',ip:''},{port:'G14',dev:'—',ip:''},{port:'G15',dev:'—',ip:''},{port:'G16',dev:'—',ip:''},{port:'G17',dev:'—',ip:''},
    {port:'G18',dev:'ELQ1-SW-GACA-01',ip:''},{port:'G19',dev:'—',ip:''},{port:'G20',dev:'—',ip:''},
    {port:'G21',dev:'Palo Alto Firewall Infra',ip:''},{port:'G22',dev:'—',ip:''},{port:'G23',dev:'—',ip:''},{port:'G24',dev:'—',ip:''},
  ]},
  {name:'ELQ1-SSS-02',room:'Core Room 5',ports:[
    {port:'G1',dev:'AMS VASL-ILOG',ip:''},{port:'G2',dev:'—',ip:''},{port:'G3',dev:'—',ip:''},{port:'G4',dev:'—',ip:''},{port:'G5',dev:'—',ip:''},{port:'G6',dev:'—',ip:''},
    {port:'G7',dev:'—',ip:''},{port:'G8',dev:'—',ip:''},{port:'G9',dev:'AMS CORE',ip:''},{port:'G10',dev:'—',ip:''},{port:'G11',dev:'—',ip:''},{port:'G12',dev:'—',ip:''},
    {port:'G13',dev:'PFMN01-NET',ip:''},{port:'G14',dev:'—',ip:''},{port:'G15',dev:'—',ip:''},{port:'G16',dev:'—',ip:''},{port:'G17',dev:'—',ip:''},{port:'G18',dev:'—',ip:''},
    {port:'G19',dev:'Palo Alto FW02 / ESXI MGT',ip:''},{port:'G20',dev:'—',ip:''},
    {port:'G21',dev:'Palo Alto Firewall Infra',ip:''},{port:'G22',dev:'—',ip:''},{port:'G23',dev:'—',ip:''},{port:'G24',dev:'—',ip:''},
  ]},
  {name:'ELQ1-SSS-03',room:'Core Room 5',ports:[
    {port:'G1',dev:'ELQ1CKB001',ip:'57.30.210.130'},{port:'G2',dev:'ELQ1CKB002',ip:'57.30.210.131'},{port:'G3',dev:'ELQ1CKB003',ip:'57.30.210.132'},
    {port:'G4',dev:'ELQ1CKB004',ip:'57.30.210.133'},{port:'G5',dev:'ELQ1CKB005',ip:'57.30.210.134'},{port:'G6',dev:'ELQ1CKB006',ip:'57.30.210.135'},
    {port:'G7',dev:'ELQ1CKB007',ip:'57.30.210.136'},{port:'G8',dev:'ELQ1CKB008',ip:'57.30.210.137'},{port:'G9',dev:'ELQ1CKB009',ip:'57.30.210.138'},
    {port:'G10',dev:'—',ip:''},{port:'G11',dev:'—',ip:''},{port:'G12',dev:'—',ip:''},{port:'G13',dev:'—',ip:''},
    {port:'G14',dev:'ELQ1BRS001',ip:'57.30.210.140'},{port:'G15',dev:'ELQ1BRS002',ip:''},{port:'G16',dev:'—',ip:''},{port:'G17',dev:'—',ip:''},
    {port:'G18',dev:'ELQ1-SW-ELECT-01 (uplink)',ip:''},{port:'G19',dev:'—',ip:''},{port:'G20',dev:'—',ip:''},{port:'G21',dev:'—',ip:''},{port:'G22',dev:'—',ip:''},{port:'G23',dev:'—',ip:''},{port:'G24',dev:'—',ip:''},
  ]},
  {name:'ELQ1-ESW-01',room:'Core Room 5',ports:[
    {port:'G1',dev:'Main Link',ip:''},{port:'G2',dev:'—',ip:''},{port:'G3',dev:'—',ip:''},{port:'G4',dev:'—',ip:''},{port:'G5',dev:'—',ip:''},{port:'G6',dev:'—',ip:''},
    {port:'G7',dev:'—',ip:''},{port:'G8',dev:'—',ip:''},{port:'G9',dev:'—',ip:''},{port:'G10',dev:'—',ip:''},{port:'G11',dev:'—',ip:''},{port:'G12',dev:'—',ip:''},
    {port:'G13',dev:'—',ip:''},{port:'G14',dev:'—',ip:''},{port:'G15',dev:'—',ip:''},{port:'G16',dev:'—',ip:''},{port:'G17',dev:'—',ip:''},{port:'G18',dev:'—',ip:''},
    {port:'G19',dev:'—',ip:''},{port:'G20',dev:'—',ip:''},
    {port:'G21',dev:'Palo Alto HA Backup',ip:''},{port:'G22',dev:'—',ip:''},
    {port:'G23',dev:'ESW-02 Trunk',ip:''},{port:'G24',dev:'—',ip:''},
  ]},
  {name:'ELQ1-ESW-02',room:'Core Room 5',ports:[
    {port:'G1',dev:'Backup Link',ip:''},{port:'G2',dev:'—',ip:''},{port:'G3',dev:'—',ip:''},{port:'G4',dev:'—',ip:''},{port:'G5',dev:'—',ip:''},
    {port:'G6',dev:'—',ip:''},{port:'G7',dev:'—',ip:''},{port:'G8',dev:'—',ip:''},{port:'G9',dev:'—',ip:''},{port:'G10',dev:'—',ip:''},
    {port:'G11',dev:'—',ip:''},{port:'G12',dev:'—',ip:''},{port:'G13',dev:'—',ip:''},{port:'G14',dev:'—',ip:''},{port:'G15',dev:'—',ip:''},
    {port:'G16',dev:'—',ip:''},{port:'G17',dev:'—',ip:''},{port:'G18',dev:'—',ip:''},{port:'G19',dev:'—',ip:''},{port:'G20',dev:'—',ip:''},
    {port:'G21',dev:'—',ip:''},{port:'G22',dev:'Palo Alto ESWAN',ip:''},{port:'G23',dev:'—',ip:''},{port:'G24',dev:'—',ip:''},
  ]},
  {name:'ELQ1-SW-GACA-01',room:'GACA Room',ports:[
    {port:'G1',dev:'ELQ1-CK-DDC001',ip:'10.123.220.17'},{port:'G2',dev:'ELQ1-CK-DDC002',ip:'10.123.220.24'},{port:'G3',dev:'—',ip:''},
    {port:'G4',dev:'ELQ1-CK-DDC003',ip:'10.123.220.23'},{port:'G5',dev:'ELQ1-CK-DDC004 / DC-DDC001',ip:'10.123.220.22'},{port:'G6',dev:'ELQ1-CK-DDC005',ip:'10.123.220.21'},
    {port:'G7',dev:'ELQ1-CK-DDC007',ip:'10.123.220.19'},{port:'G8',dev:'ELQ1-CK-DDC006',ip:'10.123.220.20'},{port:'G9',dev:'ELQ1-CK-DDC009',ip:'10.123.220.25'},
    {port:'G10',dev:'ELQ1-AT-DDC001',ip:'10.123.220.40'},{port:'G11',dev:'ELQ1-CK-DDC008',ip:'10.123.220.18'},{port:'G12',dev:'FIDs',ip:''},{port:'G13',dev:'—',ip:''},
  ]},
  {name:'ELQ1-SW-GACA-02',room:'GACA Room',ports:[
    {port:'G1',dev:'—',ip:''},{port:'G2',dev:'ELQ1-AC-DDC001',ip:'10.123.220.34'},{port:'G3',dev:'ELQ1-AC-DDC003',ip:'10.123.220.36'},
    {port:'G4',dev:'ELQ1-DC-DDC002',ip:'10.123.220.43'},{port:'G5',dev:'—',ip:''},{port:'G6',dev:'ELQ1-DG-DDC001',ip:'10.123.220.45'},
    {port:'G7',dev:'ELQ1-DG-DDC002',ip:'172.27.56.165'},{port:'G8',dev:'ELQ1-AC-DDC002',ip:'10.123.220.35'},{port:'G9',dev:'ELQ1-AC-DDC004',ip:'10.123.220.37'},
    {port:'G10',dev:'ELQ1-BI-DDC001',ip:'10.123.220.30'},{port:'G11',dev:'ELQ1-BD-DDC001',ip:'10.123.220.33'},{port:'G12',dev:'—',ip:''},{port:'G13',dev:'ELQ1-AT-DDC002',ip:'10.123.220.62'},
  ]},
  {name:'ELQ1-SW-ELECT-01',room:'Electricity Room',ports:[
    {port:'G1',dev:'ELQ1-DG-DDC005',ip:'172.27.56.168'},{port:'G2',dev:'ELQ1-GT-DDC002',ip:'172.27.56.145'},{port:'G3',dev:'—',ip:''},
    {port:'G4',dev:'ELQ1-DG-DDC003',ip:'172.27.56.166'},{port:'G5',dev:'ELQ1-DG-DDC011',ip:'172.27.56.174'},{port:'G6',dev:'ELQ1-GT-DDC003',ip:'172.27.56.146'},
    {port:'G7',dev:'ELQ1-GT-DDC004',ip:'172.27.56.147'},{port:'G8',dev:'ELQ1-DG-DDC009',ip:'172.27.56.172'},{port:'G9',dev:'ELQ1-DG-DDC008',ip:'172.27.56.171'},
    {port:'G10',dev:'—',ip:''},{port:'G11',dev:'FIDs',ip:''},{port:'G12',dev:'—',ip:''},{port:'G13',dev:'—',ip:''},
  ]},
  {name:'ELQ1-SW-ELECT-02',room:'Electricity Room',ports:[
    {port:'G1',dev:'—',ip:''},{port:'G2',dev:'—',ip:''},{port:'G3',dev:'ELQ1-LG-DDC001',ip:'10.123.220.64'},
    {port:'G4',dev:'ELQ1-LG-DDC002',ip:'10.123.220.60'},{port:'G5',dev:'—',ip:''},{port:'G6',dev:'—',ip:''},{port:'G7',dev:'—',ip:''},{port:'G8',dev:'—',ip:''},
    {port:'G9',dev:'—',ip:''},{port:'G10',dev:'ELQ1-DG-DDC004',ip:'172.27.56.167'},{port:'G11',dev:'ELQ1-DG-DDC007',ip:'172.27.56.170'},
    {port:'G12',dev:'ELQ1-VP-DDC002',ip:'172.27.56.176'},{port:'G13',dev:'ELQ1-VP-DDC003',ip:'10.123.220.59'},{port:'G14',dev:'ELQ1-VP-DDC001',ip:'10.123.220.57'},
    {port:'G15',dev:'ELQ1-DG-DDC006',ip:'172.27.56.169'},{port:'G16',dev:'ELQ1-DG-DDC010',ip:'172.27.56.173'},{port:'G17',dev:'—',ip:''},{port:'G18',dev:'ELQ1-GT-DDC001',ip:'172.27.56.144'},
  ]},
  {name:'ELQ1-SW-ADMIN-01',room:'Admin Room',ports:[
    {port:'G1',dev:'FIDs',ip:''},{port:'G2',dev:'ELQ1-AT-DDC003',ip:'10.123.220.31'},{port:'G3',dev:'ELQ1-AT-DDC006',ip:'10.123.220.61'},
    {port:'G4',dev:'ELQ1-AT-DDC004',ip:'10.123.220.32'},{port:'G5',dev:'ELQ1-AT-DDC005',ip:'10.123.220.41'},{port:'G6',dev:'ELQ1-AT-DDC007',ip:'10.123.220.63'},
    {port:'G7',dev:'FIDs',ip:''},{port:'G8',dev:'—',ip:''},{port:'G9',dev:'—',ip:''},{port:'G10',dev:'—',ip:''},
  ]},
];

const FIDS_MAP_E1=[
  {sw:'ELQ1-SW-Admin-01',room:'Admin Building · 5 nodes',nodes:[
    {port:2,node:'ELQ1-AT-DDC003',loc:'Admin Building',ip:'10.123.220.31'},
    {port:3,node:'ELQ1-AT-DDC006',loc:'Admin Building',ip:'10.123.220.61'},
    {port:4,node:'ELQ1-AT-DDC004',loc:'Admin Building',ip:'10.123.220.32'},
    {port:5,node:'ELQ1-AT-DDC005',loc:'Admin Building',ip:'10.123.220.41'},
    {port:6,node:'ELQ1-AT-DDC007',loc:'Op. Manager Office',ip:'10.123.220.63'},
  ]},
  {sw:'ELQ1-SW-ELECT-01',room:'Electricity Room · 8 nodes',nodes:[
    {port:1,node:'ELQ1-DG-DDC005',loc:'Final Dept 1 Intl',ip:'172.27.56.168'},
    {port:2,node:'ELQ1-GT-DDC002',loc:'Gate 2 DOM Dept',ip:'172.27.56.145'},
    {port:4,node:'ELQ1-DG-DDC003',loc:'Final Dept 3 Dom',ip:'172.27.56.166'},
    {port:5,node:'ELQ1-DG-DDC011',loc:'Final Dept 7 Intl',ip:'172.27.56.174'},
    {port:6,node:'ELQ1-GT-DDC003',loc:'Gate 3 DOM Intl',ip:'172.27.56.146'},
    {port:7,node:'ELQ1-GT-DDC004',loc:'Gate 4 DOM Intl',ip:'172.27.56.147'},
    {port:8,node:'ELQ1-DG-DDC009',loc:'Final Dept 5 Intl',ip:'172.27.56.172'},
    {port:9,node:'ELQ1-DG-DDC008',loc:'Final Dept 4 Intl',ip:'172.27.56.171'},
  ]},
  {sw:'ELQ1-SW-ELECT-02',room:'Electricity Room · 10 nodes',nodes:[
    {port:3,node:'ELQ1-LG-DDC001',loc:'First Class Lounge DOM',ip:'10.123.220.64'},
    {port:4,node:'ELQ1-LG-DDC002',loc:'First Class Lounge Intl',ip:'10.123.220.60'},
    {port:10,node:'ELQ1-DG-DDC004',loc:'Final Dept 4 Dom',ip:'172.27.56.167'},
    {port:11,node:'ELQ1-DG-DDC007',loc:'Final Dept 3 Intl',ip:'172.27.56.170'},
    {port:12,node:'ELQ1-VP-DDC002',loc:'Executive Lounge',ip:'172.27.56.176'},
    {port:13,node:'ELQ1-VP-DDC003',loc:'Executive Lounge',ip:'10.123.220.59'},
    {port:14,node:'ELQ1-VP-DDC001',loc:'Executive Lounge',ip:'10.123.220.57'},
    {port:15,node:'ELQ1-DG-DDC006',loc:'Final Dept 2 Intl',ip:'172.27.56.169'},
    {port:16,node:'ELQ1-DG-DDC010',loc:'Final Dept 6 Intl',ip:'172.27.56.173'},
    {port:18,node:'ELQ1-GT-DDC001',loc:'Gate 1 DOM Dept',ip:'172.27.56.144'},
  ]},
  {sw:'ELQ1-SW-GACA-01',room:'GACA Room · 11 nodes',nodes:[
    {port:1,node:'ELQ1-CK-DDC001',loc:'CHK-IN Counter 1',ip:'10.123.220.17'},
    {port:2,node:'ELQ1-CK-DDC002',loc:'CHK-IN Counter 2',ip:'10.123.220.24'},
    {port:4,node:'ELQ1-CK-DDC003',loc:'CHK-IN Counter 3',ip:'10.123.220.23'},
    {port:5,node:'ELQ1-CK-DDC004',loc:'CHK-IN Counter 4',ip:'10.123.220.22'},
    {port:5,node:'ELQ1-DC-DDC001',loc:'CHK-IN Public Monitor',ip:'10.123.220.42'},
    {port:6,node:'ELQ1-CK-DDC005',loc:'CHK-IN Counter 5',ip:'10.123.220.21'},
    {port:7,node:'ELQ1-CK-DDC007',loc:'CHK-IN Counter 7',ip:'10.123.220.19'},
    {port:8,node:'ELQ1-CK-DDC006',loc:'CHK-IN Counter 6',ip:'10.123.220.20'},
    {port:9,node:'ELQ1-CK-DDC009',loc:'CHK-IN Counter 9',ip:'10.123.220.25'},
    {port:10,node:'ELQ1-AT-DDC001',loc:'Airside Operation',ip:'10.123.220.40'},
    {port:11,node:'ELQ1-CK-DDC008',loc:'CHK-IN Counter 8',ip:'10.123.220.18'},
  ]},
  {sw:'ELQ1-SW-GACA-02',room:'GACA Room · 10 nodes',nodes:[
    {port:2,node:'ELQ1-AC-DDC001',loc:'Public Monitor 1 Arr',ip:'10.123.220.34'},
    {port:3,node:'ELQ1-AC-DDC003',loc:'Car Rent Counter',ip:'10.123.220.36'},
    {port:4,node:'ELQ1-DC-DDC002',loc:'CHK-IN Public Monitor',ip:'10.123.220.43'},
    {port:6,node:'ELQ1-DG-DDC001',loc:'Final Dept 1 Dom',ip:'10.123.220.45'},
    {port:7,node:'ELQ1-DG-DDC002',loc:'Final Dept 2 Dom',ip:'172.27.56.165'},
    {port:8,node:'ELQ1-AC-DDC002',loc:'Public Monitor 2 Arr',ip:'10.123.220.35'},
    {port:9,node:'ELQ1-AC-DDC004',loc:'SNB Bank Front',ip:'10.123.220.37'},
    {port:10,node:'ELQ1-BI-DDC001',loc:'Belt 2 Intl Arr',ip:'10.123.220.30'},
    {port:11,node:'ELQ1-BD-DDC001',loc:'Belt 1 DOM Arr',ip:'10.123.220.33'},
    {port:13,node:'ELQ1-AT-DDC002',loc:'Op. Manager Office',ip:'10.123.220.62'},
  ]},
];
const FIDS_MAP_E2=[
  {sw:'Comm Room 150',room:'AC-DDC · 8 nodes',nodes:E2DDC_GROUPS['AC-DDC'].rows.map((r,i)=>({port:i+1,...r}))},
  {sw:'Comm Room 12 (CK)',room:'CK-DDC · 11 nodes',nodes:E2DDC_GROUPS['CK-DDC'].rows.map((r,i)=>({port:i+1,...r}))},
  {sw:'Comm Room 12 (DC)',room:'DC-DDC · 13 nodes',nodes:E2DDC_GROUPS['DC-DDC'].rows.map((r,i)=>({port:i+1,...r}))},
  {sw:'Comm Room 11',room:'DG-DDC · 17 nodes',nodes:E2DDC_GROUPS['DG-DDC'].rows.map((r,i)=>({port:i+1,...r}))},
];

// ─────────────────────────────────────────
//  GROUP DEFINITIONS
// ─────────────────────────────────────────
const E1_GROUPS = [
  {
    key:'ckb', name:'CKB', color:'#4BA3FF',
    desc:'Check-In Counter Workstations', loc:'Departure Hall',
    nodes:['ELQ1CKB001','ELQ1CKB002','ELQ1CKB003','ELQ1CKB004','ELQ1CKB005','ELQ1CKB006','ELQ1CKB007','ELQ1CKB008','ELQ1CKB009'],
    assetPer:7,
    getA: n => (E1CKB_ASSETS[n]||[]).map(a=>({...a, node:n, ip:E1CKB_IPS[n]||'—'}))
  },
  {
    key:'gtu', name:'GTU', color:'#1FD8C8',
    desc:'Gate Unit Workstations', loc:'Departure Gates',
    nodes:['ELQ1GTU001','ELQ1GTU002','ELQ1GTU003','ELQ1GTU004'],
    assetPer:8,
    getA: n => (E1GTU_ASSETS[n]||[]).map(a=>({...a, node:n, ip:E1GTU_IPS[n]||'—'}))
  },
  {
    key:'brs', name:'BRS', color:'#F0A030',
    desc:'Baggage Reconciliation System', loc:'BRS Area',
    nodes:['ELQ1BRS001'],
    assetPer:8,
    getA: _=>[
      {node:'ELQ1BRS001',ip:'57.30.210.140',xid:'XS30362845',sn:'S23LC1355',type:'HHT Scanner',model:'Datalogic DL36LT'},
      {node:'ELQ1BRS001',ip:'57.30.210.140',xid:'XS30362846',sn:'S23LC0914',type:'HHT Scanner',model:'Datalogic DL36LT'},
      {node:'ELQ1BRS001',ip:'57.30.210.140',xid:'XS30362848',sn:'S23LC1784',type:'HHT Scanner',model:'Datalogic DL36LT'},
      {node:'ELQ1BRS001',ip:'57.30.210.140',xid:'XS30361885',sn:'8CC4162456',type:'Computer',model:'HP Elite Mini 600 G9'},
      {node:'ELQ1BRS001',ip:'57.30.210.140',xid:'XS30362779',sn:'CNC4010L7D',type:'Monitor',model:'HP Series 3 Pro 322pf'},
      {node:'ELQ1BRS001',ip:'57.30.210.140',xid:'XS30362786',sn:'PHM5P09926',type:'LaserJet Printer',model:'HP LaserJet Pro 400dn'},
      {node:'ELQ1BRS001',ip:'57.30.210.140',xid:'XS30362844',sn:'S22E90172',type:'Battery Charger',model:'Datalogic BTDL35'},
      {node:'ELQ1BRS001',ip:'57.30.210.140',xid:'XS30362234',sn:'AS2417252050',type:'UPS',model:'APC Smart-UPS 1000VA'},
    ]
  },
  {
    key:'ams', name:'AMS', color:'#9D7EF7',
    desc:'Amadeus Workstations', loc:'AMS Area',
    nodes:['ELQ1-AMS01','ELQ1-AMS02'],
    assetPer:2,
    getA: n => n==='ELQ1-AMS01'
      ? [{node:n,ip:'172.27.56.181',xid:'XS30364466',sn:'8CC4162ZZZ',type:'Computer',model:'HP Elite Mini 600 G9'},{node:n,ip:'172.27.56.181',xid:'XS30362772',sn:'CNC4010L9M',type:'Monitor',model:'HP Series 3 Pro 322pf'}]
      : [{node:n,ip:'172.27.56.180',xid:'XS30364463',sn:'8CC416300N',type:'Computer',model:'HP Elite Mini 600 G9'},{node:n,ip:'172.27.56.180',xid:'XS30362778',sn:'CNC4010L79',type:'Monitor',model:'HP Series 3 Pro 322pf'}]
  },
  {
    key:'ck-ddc', name:'CK-DDC', color:'#F472B6',
    desc:'Check-In Display Controllers (FIDS)', loc:'CHK-IN Counters 1–9',
    nodes:['ELQ1-CK-DDC001','ELQ1-CK-DDC002','ELQ1-CK-DDC003','ELQ1-CK-DDC004','ELQ1-CK-DDC005','ELQ1-CK-DDC006','ELQ1-CK-DDC007','ELQ1-CK-DDC008','ELQ1-CK-DDC009'],
    assetPer:1,
    getA: n => { const r=(E1DDC_GROUPS['CK-DDC']||{rows:[]}).rows.find(x=>x.node===n); return r?[{node:n,ip:r.ip,xid:r.xid,sn:r.sn,type:'FIDS Screen',model:'LG Digital Signage',loc:r.loc}]:[]; }
  },
  {
    key:'gt-ddc', name:'GT-DDC', color:'#34D399',
    desc:'Gate Display Controllers (FIDS)', loc:'Gates 1–4',
    nodes:['ELQ1-GT-DDC001','ELQ1-GT-DDC002','ELQ1-GT-DDC003','ELQ1-GT-DDC004'],
    assetPer:1,
    getA: n => { const r=(E1DDC_GROUPS['GT-DDC']||{rows:[]}).rows.find(x=>x.node===n); return r?[{node:n,ip:r.ip,xid:r.xid,sn:r.sn,type:'FIDS Screen',model:'LG Digital Signage',loc:r.loc}]:[]; }
  },
  {
    key:'ac-ddc', name:'AC-DDC', color:'#60A5FA',
    desc:'Arrival Concourse Display (FIDS)', loc:'Public Monitors Arrival',
    nodes:['ELQ1-AC-DDC001','ELQ1-AC-DDC002','ELQ1-AC-DDC003','ELQ1-AC-DDC004'],
    assetPer:1,
    getA: n => { const r=(E1DDC_GROUPS['AC-DDC']||{rows:[]}).rows.find(x=>x.node===n); return r?[{node:n,ip:r.ip,xid:r.xid,sn:r.sn,type:'FIDS Screen',model:'LG Digital Signage',loc:r.loc}]:[]; }
  },
  {
    key:'at-ddc', name:'AT-DDC', color:'#FBBF24',
    desc:'Transfer Area Display (FIDS)', loc:'Admin & Airside',
    nodes:['ELQ1-AT-DDC001','ELQ1-AT-DDC002','ELQ1-AT-DDC003','ELQ1-AT-DDC004','ELQ1-AT-DDC005','ELQ1-AT-DDC006','ELQ1-AT-DDC007'],
    assetPer:1,
    getA: n => { const r=(E1DDC_GROUPS['AT-DDC']||{rows:[]}).rows.find(x=>x.node===n); return r?[{node:n,ip:r.ip,xid:r.xid,sn:r.sn,type:'FIDS Screen',model:'LG Digital Signage',loc:r.loc}]:[]; }
  },
  {
    key:'dc-ddc', name:'DC-DDC', color:'#C084FC',
    desc:'CHK-IN Public Monitors (FIDS)', loc:'DEP 1–3 Monitors',
    nodes:['ELQ1-DC-DDC001','ELQ1-DC-DDC002','ELQ1-DC-DDC003'],
    assetPer:1,
    getA: n => { const r=(E1DDC_GROUPS['DC-DDC']||{rows:[]}).rows.find(x=>x.node===n); return r?[{node:n,ip:r.ip,xid:r.xid,sn:r.sn,type:'FIDS Screen',model:'LG Digital Signage',loc:r.loc}]:[]; }
  },
  {
    key:'dg-ddc', name:'DG-DDC', color:'#FB923C',
    desc:'Departure Gate Display (FIDS)', loc:'Final Departure DOM & Intl',
    nodes:['ELQ1-DG-DDC001','ELQ1-DG-DDC002','ELQ1-DG-DDC003','ELQ1-DG-DDC004','ELQ1-DG-DDC005','ELQ1-DG-DDC006','ELQ1-DG-DDC007','ELQ1-DG-DDC008','ELQ1-DG-DDC009','ELQ1-DG-DDC010','ELQ1-DG-DDC011'],
    assetPer:1,
    getA: n => { const r=(E1DDC_GROUPS['DG-DDC']||{rows:[]}).rows.find(x=>x.node===n); return r?[{node:n,ip:r.ip,xid:r.xid,sn:r.sn,type:'FIDS Screen',model:'LG Digital Signage',loc:r.loc}]:[]; }
  },
  {
    key:'vp-ddc', name:'VP-DDC', color:'#F87171',
    desc:'Executive Lounge Display (FIDS)', loc:'Executive Lounge',
    nodes:['ELQ1-VP-DDC001','ELQ1-VP-DDC002','ELQ1-VP-DDC003'],
    assetPer:1,
    getA: n => { const r=(E1DDC_GROUPS['VP-DDC']||{rows:[]}).rows.find(x=>x.node===n); return r?[{node:n,ip:r.ip,xid:r.xid,sn:r.sn,type:'FIDS Screen',model:'LG Digital Signage',loc:r.loc}]:[]; }
  },
  {
    key:'lg-ddc', name:'LG-DDC', color:'#6EE7B7',
    desc:'First Class Lounge Display (FIDS)', loc:'First Class Lounge',
    nodes:['ELQ1-LG-DDC001','ELQ1-LG-DDC002'],
    assetPer:1,
    getA: n => { const r=(E1DDC_GROUPS['LG-DDC']||{rows:[]}).rows.find(x=>x.node===n); return r?[{node:n,ip:r.ip,xid:r.xid,sn:r.sn,type:'FIDS Screen',model:'LG Digital Signage',loc:r.loc}]:[]; }
  },
  {
    key:'bi-ddc', name:'BI-DDC', color:'#67E8F9',
    desc:'Baggage Inbound Display (FIDS)', loc:'Belt 2 Intl Arrival',
    nodes:['ELQ1-BI-DDC001'],
    assetPer:1,
    getA: n => { const r=(E1DDC_GROUPS['BI-DDC']||{rows:[]}).rows.find(x=>x.node===n); return r?[{node:n,ip:r.ip,xid:r.xid,sn:r.sn,type:'FIDS Screen',model:'LG Digital Signage',loc:r.loc}]:[]; }
  },
  {
    key:'bd-ddc', name:'BD-DDC', color:'#A5F3FC',
    desc:'Bag Drop Display (FIDS)', loc:'Belt 1 DOM Arrival',
    nodes:['ELQ1-BD-DDC001'],
    assetPer:1,
    getA: n => { const r=(E1DDC_GROUPS['BD-DDC']||{rows:[]}).rows.find(x=>x.node===n); return r?[{node:n,ip:r.ip,xid:r.xid,sn:r.sn,type:'FIDS Screen',model:'LG Digital Signage',loc:r.loc}]:[]; }
  },
];

const E2_GROUPS = [
  {
    key:'e2ckb', name:'CKB', color:'#1FD8C8',
    desc:'Check-In Counter Workstations', loc:'Departure Hall',
    nodes:['ELQ2CKB001','ELQ2CKB002','ELQ2CKB003','ELQ2CKB004','ELQ2CKB005','ELQ2CKB006','ELQ2CKB007','ELQ2CKB008','ELQ2CKB009'],
    assetPer:5,
    getA: n => E2CKB_ROWS.filter(r=>r.node===n)
  },
  {
    key:'e2gtu', name:'GTU', color:'#4BA3FF',
    desc:'Gate Unit Workstations', loc:'Departure Gates',
    nodes:['ELQ2GTU001','ELQ2GTU002','ELQ2GTU003','ELQ2GTU004','ELQ2GTU005','ELQ2GTU006'],
    assetPer:5,
    getA: n => E2GTU_ROWS.filter(r=>r.node===n)
  },
  {
    key:'e2brs', name:'BRS', color:'#F0A030',
    desc:'Baggage Reconciliation System', loc:'BRS Area',
    nodes:['ELQ2BRS001'],
    assetPer:6,
    getA: _=>[
      {node:'ELQ2BRS001',ip:'57.1.174.218',xid:'—',sn:'16096522505967',type:'HHT Scanner',model:'Datalogic Vitalino 13'},
      {node:'ELQ2BRS001',ip:'57.1.174.218',xid:'—',sn:'SC211207810',type:'HHT Battery',model:'Datalogic Vitalino 13'},
      {node:'ELQ2BRS001',ip:'57.1.174.218',xid:'—',sn:'SC211207826',type:'HHT Battery',model:'Datalogic Vitalino 13'},
      {node:'ELQ2BRS001',ip:'57.1.174.218',xid:'—',sn:'SC211207818',type:'HHT Battery',model:'Datalogic Vitalino 13'},
      {node:'ELQ2BRS001',ip:'57.1.174.218',xid:'—',sn:'S19H51011',type:'Quad Cradle Charger',model:'Datalogic Vitalino 13'},
      {node:'ELQ2BRS001',ip:'57.1.174.218',xid:'—',sn:'17074522509900',type:'Battery Charger',model:'Datalogic Vitalino 13'},
    ]
  },
  {
    key:'e2pfm', name:'PFM', color:'#FB923C',
    desc:'Public Monitor & E-Gates', loc:'Public Area',
    nodes:['ELQ2PFM001','EGATE001','EGATE002'],
    assetPer:2,
    getA: n => {
      if(n==='ELQ2PFM001') return [{node:n,ip:'57.1.174.251',xid:'—',sn:'8CC3200SSM',type:'Computer',model:'HP Elite Mini 600 G9'},{node:n,ip:'57.1.174.251',xid:'—',sn:'CNK3020RKF',type:'Monitor',model:'HP Series 3 Pro 322pf'}];
      if(n==='EGATE001')   return [{node:n,ip:'57.1.174.252',xid:'—',sn:'190824040000183',type:'E-Gate',model:'ARGUS AIR'}];
      return [{node:n,ip:'57.1.174.253',xid:'—',sn:'190824040000184',type:'E-Gate',model:'ARGUS AIR'}];
    }
  },
  {
    key:'e2ckddc', name:'CK-DDC', color:'#F472B6',
    desc:'Check-In Display Controllers (FIDS)', loc:'CHK-IN Counters 1–11',
    nodes:['ELQ2-CK-DDC001','ELQ2-CK-DDC002','ELQ2-CK-DDC003','ELQ2-CK-DDC004','ELQ2-CK-DDC005','ELQ2-CK-DDC006','ELQ2-CK-DDC007','ELQ2-CK-DDC008','ELQ2-CK-DDC009','ELQ2-CK-DDC010','ELQ2-CK-DDC011'],
    assetPer:1,
    getA: n => { const r=(E2DDC_GROUPS['CK-DDC']||{rows:[]}).rows.find(x=>x.node===n); return r?[{node:n,ip:r.ip,xid:r.xid,sn:r.sn,type:'FIDS Screen',model:'NEC',loc:r.loc}]:[]; }
  },
  {
    key:'e2dcddc', name:'DC-DDC', color:'#9D7EF7',
    desc:'CHK-IN Public Monitors (FIDS)', loc:'DEP CHK-IN Monitors',
    nodes:['ELQ2-DC-DDC001','ELQ2-DC-DDC002','ELQ2-DC-DDC003','ELQ2-DC-DDC004','ELQ2-DC-DDC005','ELQ2-DC-DDC006','ELQ2-DC-DDC007','ELQ2-DC-DDC008','ELQ2-DC-DDC009','ELQ2-DC-DDC010','ELQ2-DC-DDC011','ELQ2-DC-DDC012','ELQ2-DC-DDC013'],
    assetPer:1,
    getA: n => { const r=(E2DDC_GROUPS['DC-DDC']||{rows:[]}).rows.find(x=>x.node===n); return r?[{node:n,ip:r.ip,xid:r.xid,sn:r.sn,type:'FIDS Screen',model:'NEC',loc:r.loc}]:[]; }
  },
  {
    key:'e2dgddc', name:'DG-DDC', color:'#FBBF24',
    desc:'Departure Gate Display (FIDS)', loc:'DOM Departure Lounge',
    nodes:['ELQ2-DG-DDC001','ELQ2-DG-DDC002','ELQ2-DG-DDC003','ELQ2-DG-DDC004','ELQ2-DG-DDC005','ELQ2-DG-DDC006','ELQ2-DG-DDC007','ELQ2-DG-DDC008','ELQ2-DG-DDC009','ELQ2-DG-DDC010','ELQ2-DG-DDC011','ELQ2-DG-DDC012','ELQ2-DG-DDC013','ELQ2-DG-DDC014','ELQ2-DG-DDC015','ELQ2-DG-DDC016','ELQ2-DG-DDC017'],
    assetPer:1,
    getA: n => { const r=(E2DDC_GROUPS['DG-DDC']||{rows:[]}).rows.find(x=>x.node===n); return r?[{node:n,ip:r.ip,xid:r.xid,sn:r.sn,type:'FIDS Screen',model:'NEC',loc:r.loc}]:[]; }
  },
  {
    key:'e2acddc', name:'AC-DDC', color:'#34D399',
    desc:'Arrival Concourse Display (FIDS)', loc:'Public Monitor Arrival',
    nodes:['ELQ2-AC-DDC001','ELQ2-AC-DDC002','ELQ2-AC-DDC003','ELQ2-AC-DDC004','ELQ2-AC-DDC005','ELQ2-AC-DDC006','ELQ2-AC-DDC007','ELQ2-AC-DDC008'],
    assetPer:1,
    getA: n => { const r=(E2DDC_GROUPS['AC-DDC']||{rows:[]}).rows.find(x=>x.node===n); return r?[{node:n,ip:r.ip,xid:r.xid,sn:r.sn,type:'FIDS Screen',model:'NEC',loc:r.loc}]:[]; }
  },
];






// ─── MODAL ───
function showNodeDetail(g, nodeName, assets) {
  var ov = document.getElementById('modal-overlay');
  if (!ov) return;
  assets = Array.isArray(assets) ? assets : [];
  var ip = assets.length ? assets[0].ip : '—';

  document.getElementById('modal-title').textContent = nodeName;
  document.getElementById('modal-title').style.color = g.color;
  document.getElementById('modal-sub').textContent = g.name + ' · ' + g.desc + ' · ' + g.loc;

  var info = '';
  var pairs = [['IP ADDRESS',ip],['GROUP',g.name],['ASSETS',assets.length],
               ['TERMINAL',curTerm],['LOCATION',g.loc],['TYPE',g.desc]];
  pairs.forEach(function(p){
    info += '<div style="background:#111E30;border:1px solid #1A3050;border-radius:8px;padding:10px 12px;">' +
            '<div style="font-size:9px;font-weight:600;font-family:JetBrains Mono,monospace;color:#2A4060;letter-spacing:.07em;margin-bottom:4px;">' + p[0] + '</div>' +
            '<div style="font-size:12px;font-weight:500;color:#EAF2FF;">' + p[1] + '</div></div>';
  });
  document.getElementById('modal-info').innerHTML = info;
  document.getElementById('modal-assets-lbl').textContent = 'ASSET LIST — ' + assets.length + ' items';
  document.getElementById('modal-assets-lbl').style.color = '#9BB4D0';

  var hasLoc = assets.some(function(a){ return a.loc; });
  document.getElementById('modal-thead').innerHTML =
    '<th style="font-family:JetBrains Mono,monospace;font-size:9px;color:#9BB4D0;letter-spacing:.07em;text-align:left;padding:7px 11px;border-bottom:1px solid #1A3050;">#</th>' +
    '<th style="font-family:JetBrains Mono,monospace;font-size:9px;color:#9BB4D0;letter-spacing:.07em;text-align:left;padding:7px 11px;border-bottom:1px solid #1A3050;">TYPE</th>' +
    '<th style="font-family:JetBrains Mono,monospace;font-size:9px;color:#9BB4D0;letter-spacing:.07em;text-align:left;padding:7px 11px;border-bottom:1px solid #1A3050;">MODEL</th>' +
    '<th style="font-family:JetBrains Mono,monospace;font-size:9px;color:#9BB4D0;letter-spacing:.07em;text-align:left;padding:7px 11px;border-bottom:1px solid #1A3050;">SERIAL</th>' +
    '<th style="font-family:JetBrains Mono,monospace;font-size:9px;color:#9BB4D0;letter-spacing:.07em;text-align:left;padding:7px 11px;border-bottom:1px solid #1A3050;">ASSET TAG</th>' +
    (hasLoc ? '<th style="font-family:JetBrains Mono,monospace;font-size:9px;color:#9BB4D0;letter-spacing:.07em;text-align:left;padding:7px 11px;border-bottom:1px solid #1A3050;">LOCATION</th>' : '');
  var rows = assets.map(function(a, i){
    return '<tr>' +
      '<td style="padding:7px 11px;border-bottom:1px solid #1A3050;font-family:JetBrains Mono,monospace;font-size:9px;color:#829AB5;">' + (i+1) + '</td>' +
      '<td style="padding:7px 11px;border-bottom:1px solid #1A3050;font-weight:500;color:#EAF2FF;">'  + (a.type  || '—') + '</td>' +
      '<td style="padding:7px 11px;border-bottom:1px solid #1A3050;font-family:JetBrains Mono,monospace;font-size:11px;color:#A0B8D4;">' + (a.model || '—') + '</td>' +
      '<td style="padding:7px 11px;border-bottom:1px solid #1A3050;font-family:JetBrains Mono,monospace;font-size:10px;color:#5A7A9A;">' + (a.sn    || '—') + '</td>' +
      '<td style="padding:7px 11px;border-bottom:1px solid #1A3050;font-family:JetBrains Mono,monospace;font-size:9.5px;color:#9BB4D0;">' + (a.xid   || '—') + '</td>' +
      (hasLoc ? '<td style="padding:7px 11px;border-bottom:1px solid #1A3050;font-size:10px;color:#9BB4D0;">' + (a.loc || '') + '</td>' : '') +
      '</tr>';
  }).join('');
  document.getElementById('modal-tbody').innerHTML = rows || '<tr><td colspan="5" style="padding:16px 11px;color:#9BB4D0;text-align:center;">No asset records found</td></tr>';

  ov.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  var ov = document.getElementById('modal-overlay');
  if (ov) ov.style.display = 'none';
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});


// ── Subtle tech particle animation on home page ──
(function(){
  var canvas = document.getElementById('home-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var W, H, particles = [], lines = [];
  var PARTICLE_COUNT = 40;

  function resize(){
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function mkParticle(){
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.4 + 0.1
    };
  }

  resize();
  for (var i = 0; i < PARTICLE_COUNT; i++) particles.push(mkParticle());
  window.addEventListener('resize', resize);

  function draw(){
    ctx.clearRect(0, 0, W, H);
    // Draw connecting lines
    for (var i = 0; i < particles.length; i++){
      for (var j = i+1; j < particles.length; j++){
        var dx = particles[i].x - particles[j].x;
        var dy = particles[i].y - particles[j].y;
        var dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 120){
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = 'rgba(75,163,255,' + (0.08 * (1 - dist/120)) + ')';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    // Draw particles
    particles.forEach(function(p){
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fillStyle = 'rgba(75,163,255,' + p.opacity + ')';
      ctx.fill();
      // Move
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

// ─────────────────────────────────────────
//  FIDS FLAT LISTS
// ─────────────────────────────────────────
const FIDS1 = Object.entries(E1DDC_GROUPS).flatMap(([k,g])=>g.rows.map(r=>({...r,group:k,model:'LG Digital Signage'})));
const FIDS2 = Object.entries(E2DDC_GROUPS).flatMap(([k,g])=>g.rows.map(r=>({...r,group:k,model:'NEC'})));

// ─────────────────────────────────────────
//  INVENTORY DATA
// ─────────────────────────────────────────
const INV_E1=[{cat:'CKB',loc:'Departure Hall',assets:63},{cat:'GTU',loc:'Departure Gates',assets:32},{cat:'BOC',loc:'BOC',assets:1},{cat:'BRS',loc:'Baggage Area',assets:18},{cat:'AMS',loc:'AMS Area',assets:6},{cat:'CSF-W',loc:'Core Room',assets:2},{cat:'SSS',loc:'Core Room',assets:3},{cat:'ESXI',loc:'Core Room',assets:2},{cat:'VASL',loc:'Core Room',assets:1},{cat:'PFMN',loc:'Core Room',assets:2},{cat:'SAN',loc:'Core Room',assets:1},{cat:'PROXY',loc:'Core Room',assets:1},{cat:'CK-DDC',loc:'CHK-IN Counters',assets:9},{cat:'GT-DDC',loc:'Gates',assets:4},{cat:'BI-DDC',loc:'Belt Intl Arr',assets:1},{cat:'BD-DDC',loc:'Belt DOM Arr',assets:1},{cat:'AC-DDC',loc:'Public Monitor Arr',assets:4},{cat:'AT-DDC',loc:'Airside Operation',assets:7},{cat:'DC-DDC',loc:'CHK-IN Public Monitor',assets:3},{cat:'DG-DDC',loc:'Final Departure',assets:11},{cat:'VP-DDC',loc:'Executive Lounge',assets:3},{cat:'LG-DDC',loc:'First Class Lounge',assets:2}];
const INV_E2=[{cat:'CKB',loc:'Departure Hall',assets:45},{cat:'GTU',loc:'Departure Gates',assets:31},{cat:'BRS',loc:'Baggage Area',assets:8},{cat:'PFM',loc:'Public Area',assets:2},{cat:'EGATE',loc:'Public Area',assets:2},{cat:'CK-DDC',loc:'CHK-IN Counters',assets:11},{cat:'AC-DDC',loc:'Public Monitor Arr',assets:8},{cat:'DC-DDC',loc:'CHK-IN Monitors',assets:13},{cat:'DG-DDC',loc:'DOM Departure Lounge',assets:17}];
const INV_SPARE=[{cat:'SPARE',loc:'BRS Arrival',assets:41}];

// ─────────────────────────────────────────
//  SUMMARY DATA
// ─────────────────────────────────────────
const SUM={
  cute:[{type:'Boarding Gate Reader',online:12,spare:0},{type:'Computer',online:31,spare:2},{type:'Monitor',online:31,spare:2},{type:'ATB Printer',online:28,spare:2},{type:'BTP Printer',online:22,spare:2},{type:'Laser Scanner',online:9,spare:1},{type:'OCR / Passport Reader',online:28,spare:1},{type:'UPS',online:14,spare:2},{type:'Document Printer',online:8,spare:1},{type:'HHT Scanner',online:7,spare:5},{type:'LaserJet Printer',online:2,spare:1},{type:'Battery Charger',online:2,spare:5},{type:'Cisco Firewall',online:2,spare:0},{type:'Server',online:6,spare:0},{type:'Quad Cradle Charger',online:3,spare:0}],
  pfm:[{type:'Computer',online:1,spare:0},{type:'Monitor',online:1,spare:0}],
  fidsams:[{type:'Computer',online:3,spare:0},{type:'Monitor',online:3,spare:0},{type:'FIDS Screen',online:95,spare:1}],
  egate:[{type:'E-gate (ARGUS AIR)',online:2,spare:0}],
};

// ─────────────────────────────────────────
//  STATE
// ─────────────────────────────────────────
let curGrp=null, curTerm=null;

// ─────────────────────────────────────────
//  NAVIGATION
// ─────────────────────────────────────────
function nav(id){
  // Pages
  document.querySelectorAll('.pg').forEach(p=>p.classList.remove('on'));
  const pg=document.getElementById('pg-'+id);
  if(pg) pg.classList.add('on');
  // Tabs — use data-page attribute for reliable matching
  document.querySelectorAll('.nt[data-page]').forEach(b=>{
    b.classList.toggle('on', b.dataset.page===id);
  });
  window.scrollTo({top:0,behavior:'instant'});
}

// Hamburger / drawer
function toggleDrawer(){
  var h = document.getElementById('nb-hamburger');
  var d = document.getElementById('t-drawer');
  if (!h || !d) return;
  var isOpen = d.classList.contains('open');
  if (isOpen) { closeDrawer(); }
  else {
    d.classList.add('open');
    h.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}
function closeDrawer(){
  var h = document.getElementById('nb-hamburger');
  var d = document.getElementById('t-drawer');
  if (d) d.classList.remove('open');
  if (h) h.classList.remove('open');
  document.body.style.overflow = '';
}
// Close drawer on resize to desktop
window.addEventListener('resize',()=>{
  if(window.innerWidth>960) closeDrawer();
});
// Close drawer on Escape
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    closeDrawer();
  }
});
setInterval(()=>{document.getElementById('clk').textContent=new Date().toLocaleTimeString();},1000);
document.getElementById('clk').textContent=new Date().toLocaleTimeString();

// ─────────────────────────────────────────
//  ON-DUTY ROTATION
// ─────────────────────────────────────────
const DUTY_TEAM = ['Zaid','Rakan','Abdulaziz','Fahad'];
const DUTY_SHIFTS = [
  {start:6, end:14, label:'06:00 – 14:00'},
  {start:14, end:22, label:'14:00 – 22:00'},
  {start:22, end:30, label:'22:00 – 06:00'}
];
function updateDutyPanel(){
  const now = new Date();
  const hour = now.getHours() + now.getMinutes() / 60;
  const shift = DUTY_SHIFTS.find(s => hour >= s.start || (s.start === 22 && hour < 6)) || DUTY_SHIFTS[0];
  const dayIndex = Math.floor(new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime() / 86400000);
  const shiftIndex = DUTY_SHIFTS.indexOf(shift);
  const person = DUTY_TEAM[(dayIndex + shiftIndex) % DUTY_TEAM.length];
  const personEl = document.getElementById('duty-person');
  const shiftEl = document.getElementById('duty-shift');
  if (personEl) personEl.textContent = person;
  if (shiftEl) shiftEl.textContent = shift.label + ' · ELQ IT';
}
updateDutyPanel();
setInterval(updateDutyPanel, 60000);

// ─────────────────────────────────────────
//  BUILD GROUP GRID
// ─────────────────────────────────────────
function buildGrpGrid(elId,groups,term){
  const el=document.getElementById(elId);
  el.innerHTML='';
  groups.forEach(g=>{
    const totalAssets=g.nodes.length*g.assetPer;
    const d=document.createElement('div');
    d.className='grp';
    d.innerHTML=`
      <div class="grp-bar" style="background:${g.color}"></div>
      <div class="grp-body">
        <div class="grp-name">${g.name}</div>
        <div class="grp-desc">${g.desc}</div>
        <div style="font-family:var(--mono);font-size:9px;color:var(--t3);margin-bottom:10px;">${g.loc}</div>
        <div class="grp-foot">
          <div class="grp-stats">
            <div class="gst"><div class="gst-v" style="color:${g.color}">${g.nodes.length}</div><div class="gst-l">Nodes</div></div>
            <div class="gst"><div class="gst-v">${totalAssets}</div><div class="gst-l">Assets</div></div>
          </div>
          <span class="grp-arr">→</span>
        </div>
      </div>`;
    d.onclick=()=>openGrp(g,term);
    el.appendChild(d);
  });
}
buildGrpGrid('gg-e1',E1_GROUPS,'ELQ-1');
buildGrpGrid('gg-e2',E2_GROUPS,'ELQ-2');

// ─────────────────────────────────────────
//  OPEN GROUP DETAIL
// ─────────────────────────────────────────
function openGrp(g,term){
  curGrp=g; curTerm=term;
  // Breadcrumb
  document.getElementById('grp-bc').innerHTML=`
    <span class="bc-a" onclick="nav('home')">Home</span>
    <span class="bc-sep">/</span>
    <span class="bc-a" onclick="nav('${term==='ELQ-1'?'elq1':'elq2'}')">${term}</span>
    <span class="bc-sep">/</span>
    <span class="bc-cur" style="color:${g.color}">${g.name}</span>`;
  // Metrics
  const totalA=g.nodes.length*g.assetPer;
  document.getElementById('grp-metrics').innerHTML=`
    <div class="mcard" style="--mc-c:${g.color}"><div class="mv">${g.nodes.length}</div><div class="ml">Nodes</div></div>
    <div class="mcard" style="--mc-c:var(--amb)"><div class="mv">${totalA}</div><div class="ml">Assets</div></div>
    <div class="mcard" style="--mc-c:var(--t2)"><div class="mv" style="font-size:16px">${g.desc}</div><div class="ml">${g.loc}</div></div>`;
  document.getElementById('grp-metrics').className='mstrip ms3';
  // Section label
  document.getElementById('grp-sl-dot').style.background=g.color;
  document.getElementById('grp-sl-txt').textContent=`${g.name} — ${g.nodes.length} nodes`;
  // Export
  document.getElementById('grp-xlsx-btn').onclick=()=>expGrpXlsx(g);
  document.getElementById('grp-csv-btn').onclick=()=>expGrpCsv(g);
  // Reset search
  document.getElementById('grp-q').value='';
  renderGrp(g,'');
  nav('grp');
}

function filterGrp(){
  if(curGrp) renderGrp(curGrp,document.getElementById('grp-q').value.toLowerCase());
}

// Node store
var _nodeStore = {};

function renderGrp(g, q) {
  var list = document.getElementById('grp-devlist');
  if (!list) return;
  list.innerHTML = '';
  _nodeStore = {};
  var shown = 0;
  var qLow = q ? q.toLowerCase() : '';

  g.nodes.forEach(function(nodeName, ni) {
    var assets = g.getA(nodeName);
    var ip = assets.length ? assets[0].ip : '—';

    var matched = !qLow
      || nodeName.toLowerCase().indexOf(qLow) >= 0
      || assets.some(function(a) {
           return (a.sn||'').toLowerCase().indexOf(qLow) >= 0
               || (a.type||'').toLowerCase().indexOf(qLow) >= 0
               || (a.model||'').toLowerCase().indexOf(qLow) >= 0;
         });
    if (!matched) return;
    shown++;

    // Build card
    var assetRowsHtml = assets.map(function(a) {
      return '<div class="gnc-asset-row">' +
        '<div class="gnc-asset-type">' + (a.type || '—') + '</div>' +
        '<div class="gnc-asset-model">' + (a.model || '—') + '</div>' +
        '<div class="gnc-asset-meta"><span>' + (a.sn || '—') + '</span><span>' + (a.xid || '—') + '</span></div>' +
        '</div>';
    }).join('');

    var card = document.createElement('div');
    card.className = 'grp-node-card';
    card.style.cssText = 'border-left-color:' + g.color + ';';
    card.innerHTML =
      '<div class="gnc-top">' +
        '<div>' +
          '<div class="gnc-name">' + nodeName + '</div>' +
          '<div class="gnc-ip">' + ip + '</div>' +
        '</div>' +
        '<div class="gnc-count" style="color:' + g.color + '">' + assets.length + '<span>assets</span></div>' +
      '</div>' +
      '<div class="gnc-assets">' + assetRowsHtml + '</div>' +
      '<div class="gnc-foot">' +
        '<span class="gnc-loc">' + g.loc + '</span>' +
      '</div>';

    list.appendChild(card);
  });

  var rc = document.getElementById('grp-rc');
  if (rc) rc.textContent = 'Showing ' + shown + ' of ' + g.nodes.length + ' nodes';
}


function _unused_openNodeModal(key) {
  var entry = _nodeStore[key];
  if (!entry) { console.error('No entry for key:', key); return; }
  showNodeDetail(entry.g, entry.nodeName, entry.assets);
}


// ─────────────────────────────────────────
//  FIDS
// ─────────────────────────────────────────
['f1','f2'].forEach(s=>{
  const data=s==='f1'?FIDS1:FIDS2;
  const sel=document.getElementById('g'+s);
  [...new Set(data.map(d=>d.group))].sort().forEach(g=>{const o=document.createElement('option');o.value=g;o.textContent=g;sel.appendChild(o);});
});
function rFids(s){
  const data=s==='f1'?FIDS1:FIDS2;
  const q=(document.getElementById('s'+s).value||'').toLowerCase();
  const gv=document.getElementById('g'+s).value;
  const cont=document.getElementById(`fids${s==='f1'?1:2}-sec`);
  cont.innerHTML='';
  const grouped={};
  data.filter(d=>{
    if(gv!=='all'&&d.group!==gv)return false;
    if(q&&!d.node.toLowerCase().includes(q)&&!d.sn.toLowerCase().includes(q)&&!d.loc.toLowerCase().includes(q)&&!(d.xid||'').toLowerCase().includes(q))return false;
    return true;
  }).forEach(d=>{if(!grouped[d.group])grouped[d.group]=[];grouped[d.group].push(d);});
  let tot=0;
  const c=s==='f1'?'var(--pur)':'var(--tel)';
  Object.entries(grouped).forEach(([gk,rows])=>{
    tot+=rows.length;
    cont.innerHTML+=`<div class="fb">
      <div class="fb-hdr">
        <span class="fb-name" style="color:${c}">${gk}</span>
        <span class="fb-info" style="margin-left:8px">${rows[0]?.loc||''}</span>
        <span class="badge ${s==='f1'?'bp':'bt'}" style="margin-left:auto">${rows.length}</span>
      </div>
      <div class="tw" style="max-height:220px;border-radius:0 0 var(--r8) var(--r8)">
        <table><thead><tr><th>ASSET TAG</th><th>NODE</th><th>IP ADDRESS</th><th>SERIAL</th><th>MODEL</th><th>LOCATION</th></tr></thead>
        <tbody>${rows.map(d=>`<tr><td class="td-xid">${d.xid||'—'}</td><td class="td-n">${d.node}</td><td class="td-ip">${d.ip}</td><td class="td-sn">${d.sn}</td><td style="color:var(--t1)">${d.model}</td><td style="color:var(--t1)">${d.loc}</td></tr>`).join('')}</tbody>
        </table>
      </div>
    </div>`;
  });
  document.getElementById(`rc-${s}`).textContent=`${tot} screens`;
}
rFids('f1'); rFids('f2');

// ─────────────────────────────────────────
//  PORT MAP
// ─────────────────────────────────────────

// ─────────────────────────────────────────
//  PORT MAP — PROFESSIONAL RENDERER
// ─────────────────────────────────────────

// Location groups with color and order
const SW_LOCATIONS = [
  {
    key:'core', label:'CORE ROOM 5', color:'#4BA3FF',
    switches:['ELQ1-SSS-01','ELQ1-SSS-02','ELQ1-SSS-03','ELQ1-ESW-01','ELQ1-ESW-02']
  },
  {
    key:'gaca', label:'GACA ROOM', color:'#1FD8C8',
    switches:['ELQ1-SW-GACA-01','ELQ1-SW-GACA-02']
  },
  {
    key:'elect', label:'ELECTRICITY ROOM', color:'#F0A030',
    switches:['ELQ1-SW-ELECT-01','ELQ1-SW-ELECT-02']
  },
  {
    key:'admin', label:'ADMIN ROOM', color:'#9D7EF7',
    switches:['ELQ1-SW-ADMIN-01']
  },
];

// Port type classifier
function classifyPort(dev) {
  if (!dev || dev === '—') return null;
  const d = dev.toLowerCase();
  if (d.includes('uplink') || d.includes('trunk') || d.includes('link') || d.includes('backbone')) return 'uplink';
  if (d.includes('palo') || d.includes('firewall') || d.includes('esxi') || d.includes('mgt') || d.includes('ha ')) return 'infra';
  if (d.includes('ckb') || d.includes('gtu') || d.includes('brs')) return 'workst';
  if (d.includes('ddc') || d.includes('fids')) return 'fids';
  if (d.includes('pfmn') || d.includes('vasl') || d.includes('ams') || d.includes('core') || d.includes('sw-')) return 'mgmt';
  return null;
}
const typeLabel = { uplink:'UPLINK', infra:'INFRA', workst:'CUTE', fids:'FIDS', mgmt:'MGMT' };

function buildPortMap() {
  const container = document.getElementById('pmg');
  container.innerHTML = '';

  SW_LOCATIONS.forEach(loc => {
    const locDiv = document.createElement('div');
    locDiv.className = 'pm-location-group';
    locDiv.innerHTML = `<div class="pm-location-label" style="--loc-c:${loc.color}">${loc.label}</div>`;

    loc.switches.forEach(swName => {
      const sw = SWITCHES.find(s => s.name === swName);
      if (!sw) return;

      const activePorts = sw.ports.filter(p => p.dev && p.dev !== '—');
      const total = activePorts.length;

      // Determine switch color by location
      const swColor = loc.color;
      const swColorDim = loc.color + '18';
      const swColorBrd = loc.color + '30';

      // Build port rows
      const portRows = activePorts.map(p => {
        const isEmpty = false;
        const ptype = classifyPort(p.dev);
        const typeTag = ptype ? `<span class="pm-type ${ptype}">${typeLabel[ptype]}</span>` : '';
        return `<tr>
          <td class="pm-pn">
            <span class="pm-led ${isEmpty?'empty-led':'active'}"></span>${p.port}
          </td>
          <td>
            <span class="pm-dn ${isEmpty?'empty':''}">${isEmpty ? 'empty' : p.dev}</span>${typeTag}
          </td>
          <td class="pm-ipc">${p.ip||''}</td>
        </tr>`;
      }).join('');

      locDiv.innerHTML += `
        <div class="pm-sw-wrap" style="--sw-c:${swColor};--sw-cd:${swColorDim};--sw-cb:${swColorBrd}">
          <div class="pm-sw-hdr">
            <div class="pm-sw-accent"></div>
            <div class="pm-sw-info">
              <div class="pm-sw-name">${sw.name}</div>
              <div class="pm-sw-meta">
                <span class="pm-sw-room">${sw.room}</span>
                <div class="pm-sw-counts">
                  <span class="pm-sw-count used">${activePorts.length} active</span>
                  <span class="pm-sw-count total">${total} ports total</span>
                </div>
              </div>
            </div>
          </div>
          <div style="overflow-x:auto;">
            <table class="pm-port-table">
              <thead><tr><th>PORT</th><th>CONNECTED DEVICE</th><th>IP ADDRESS</th></tr></thead>
              <tbody>${portRows}</tbody>
            </table>
          </div>
        </div>`;
    });

    container.appendChild(locDiv);
  });
}
buildPortMap();

// FIDS MAP renderer
function buildFm(id, data, color) {
  const el = document.getElementById(id);
  el.innerHTML = '';
  data.forEach(s => {
    const rows = s.nodes.map(n => `
      <div class="pm-fids-row">
        <span class="pm-fids-pt">${n.port||'—'}</span>
        <span class="pm-fids-node">${n.node||n.dev||'—'}</span>
        <span class="pm-fids-ip">${n.ip||''}</span>
      </div>`).join('');
    el.innerHTML += `
      <div class="pm-fids-card" style="--fids-c:${color}">
        <div class="pm-fids-hdr">
          <div class="pm-fids-accent"></div>
          <div class="pm-fids-info">
            <div class="pm-fids-sw">${s.sw}</div>
            <div class="pm-fids-room">${s.room}</div>
          </div>
          <span class="pm-fids-badge badge" style="background:${color}18;color:${color};border:1px solid ${color}30;">${s.nodes.length} nodes</span>
        </div>
        <div class="pm-fids-rows">${rows}</div>
      </div>`;
  });
}
buildFm('fm-e1', FIDS_MAP_E1, '#9D7EF7');
buildFm('fm-e2', FIDS_MAP_E2, '#1FD8C8');


// ─────────────────────────────────────────
//  INVENTORY BARS
// ─────────────────────────────────────────
function mkInvBars(id,data,color){
  const el=document.getElementById(id);
  if(!el)return;
  const max=Math.max(...data.map(d=>d.assets));
  [...data].sort((a,b)=>b.assets-a.assets).forEach(d=>{
    const p=Math.round(d.assets/max*100);
    el.innerHTML+=`<div class="br"><span class="br-l">${d.cat}</span><div class="br-t"><div class="br-f" style="width:${p}%;background:${color}"></div></div><span class="br-v">${d.assets}</span><span class="br-d">${d.loc}</span></div>`;
  });
}
mkInvBars('inv-b1',INV_E1,'var(--blu)');
mkInvBars('inv-b2',INV_E2,'var(--tel)');

function rInv(){
  const q=(document.getElementById('sinv').value||'').toLowerCase();
  const tf=document.getElementById('ginv').value;
  const all=[...INV_E1.map(d=>({...d,term:'ELQ-1'})),...INV_E2.map(d=>({...d,term:'ELQ-2'})),...INV_SPARE.map(d=>({...d,term:'Spare'}))].filter(d=>{
    if(tf!=='all'&&d.term!==tf)return false;
    if(q&&!d.cat.toLowerCase().includes(q)&&!d.loc.toLowerCase().includes(q))return false;
    return true;
  });
  document.getElementById('tb-inv').innerHTML=all.map(d=>`<tr>
    <td><span class="badge ${d.term==='ELQ-1'?'bb':d.term==='ELQ-2'?'bt':'ba'}">${d.term}</span></td>
    <td class="td-n">${d.cat}</td>
    <td style="color:var(--t1)">${d.loc}</td>
    <td style="text-align:right;font-family:var(--mono);font-weight:700;color:var(--t0)">${d.assets}</td>
  </tr>`).join('');
  document.getElementById('rc-inv').textContent=`${all.length} groups`;
}
rInv();

// ─────────────────────────────────────────
//  SUMMARY
// ─────────────────────────────────────────
function rSum(id,data){document.getElementById(id).innerHTML=data.map((d,i)=>`<tr><td style="font-family:var(--mono);font-size:9px;color:var(--t3)">${i+1}</td><td>${d.type}</td><td>${d.online}</td><td>${d.spare}</td><td>${d.online+d.spare}</td></tr>`).join('');}
rSum('sum-cute',SUM.cute);rSum('sum-pfm',SUM.pfm);rSum('sum-fidsams',SUM.fidsams);rSum('sum-egate',SUM.egate);

// ─────────────────────────────────────────
//  EXPORT HELPERS
// ─────────────────────────────────────────
function allGrpRows(g){const r=[];g.nodes.forEach(n=>g.getA(n).forEach(a=>r.push(a)));return r;}
function expGrpXlsx(g){if(typeof XLSX==='undefined'){alert('Loading…');return;}const h=['NODE','IP','ASSET TAG','TYPE','SERIAL','MODEL'];doXlsx(h,allGrpRows(g).map(a=>[a.node,a.ip||'—',a.xid||'—',a.type,a.sn,a.model]),`ELQ_${g.name}`);}
function expGrpCsv(g){const h=['NODE','IP','ASSET TAG','TYPE','SERIAL','MODEL'];doCsv(h,allGrpRows(g).map(a=>[a.node,a.ip||'—',a.xid||'—',a.type,a.sn,a.model]),`ELQ_${g.name}`);}
function xlsxF(s){if(typeof XLSX==='undefined'){alert('Loading…');return;}const d=s==='f1'?FIDS1:FIDS2;doXlsx(['ASSET TAG','NODE','IP','GROUP','SERIAL','MODEL','LOCATION'],d.map(r=>[r.xid||'—',r.node,r.ip,r.group,r.sn,r.model,r.loc]),'ELQ_FIDS_'+s.toUpperCase());}
function csvF(s){const d=s==='f1'?FIDS1:FIDS2;doCsv(['ASSET TAG','NODE','IP','GROUP','SERIAL','MODEL','LOCATION'],d.map(r=>[r.xid||'—',r.node,r.ip,r.group,r.sn,r.model,r.loc]),'ELQ_FIDS_'+s.toUpperCase());}
function xlsxInv(){if(typeof XLSX==='undefined'){alert('Loading…');return;}const all=[...INV_E1.map(d=>['ELQ-1',d.cat,d.loc,d.assets]),...INV_E2.map(d=>['ELQ-2',d.cat,d.loc,d.assets]),...INV_SPARE.map(d=>['Spare',d.cat,d.loc,d.assets])];doXlsx(['TERMINAL','CATEGORY','LOCATION','ASSETS'],all,'ELQ_Inventory');}
function csvInv(){const all=[...INV_E1.map(d=>['ELQ-1',d.cat,d.loc,d.assets]),...INV_E2.map(d=>['ELQ-2',d.cat,d.loc,d.assets]),...INV_SPARE.map(d=>['Spare',d.cat,d.loc,d.assets])];doCsv(['TERMINAL','CATEGORY','LOCATION','ASSETS'],all,'ELQ_Inventory');}
function xlsxSum(s){if(typeof XLSX==='undefined'){alert('Loading…');return;}const d=SUM[s];doXlsx(['#','TYPE','ONLINE','SPARE','TOTAL'],d.map((r,i)=>[i+1,r.type,r.online,r.spare,r.online+r.spare]),'ELQ_Summary_'+s.toUpperCase());}
function csvSum(s){const d=SUM[s];doCsv(['#','TYPE','ONLINE','SPARE','TOTAL'],d.map((r,i)=>[i+1,r.type,r.online,r.spare,r.online+r.spare]),'ELQ_Summary_'+s.toUpperCase());}
function cabinetRows(){return [...document.querySelectorAll('#cabinet-table tbody tr')].map(row=>[...row.cells].map(cell=>cell.textContent.trim()));}
function xlsxCabinets(){if(typeof XLSX==='undefined'){alert('Loading…');return;}doXlsx(['ASSET TAG','NODE','SERIAL','EQUIPMENT TYPE','MODEL','ROOM'],cabinetRows(),'ELQ_Cabinets');}
function csvCabinets(){doCsv(['ASSET TAG','NODE','SERIAL','EQUIPMENT TYPE','MODEL','ROOM'],cabinetRows(),'ELQ_Cabinets');}
function doCsv(h,rows,name){const BOM='\uFEFF';const csv=BOM+[h,...rows].map(r=>r.map(c=>'"'+String(c).replace(/"/g,'""')+'"').join(';')).join('\r\n');dl(name+'_'+today()+'.csv','text/csv;charset=utf-8',csv);}
function doXlsx(h,rows,name){const ws=XLSX.utils.aoa_to_sheet([h,...rows]);ws['!cols']=h.map(()=>({wch:22}));const wb=XLSX.utils.book_new();XLSX.utils.book_append_sheet(wb,ws,'Data');XLSX.writeFile(wb,name+'_'+today()+'.xlsx');}
function dl(n,t,c){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([c],{type:t}));a.download=n;a.click();}
function today(){return new Date().toISOString().slice(0,10);}
(function(){const s=document.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js';document.head.appendChild(s);})();



// ═══════════════════════════════════════════
//  FIX DRAWER: position below topbar height
// ═══════════════════════════════════════════
function updateDrawerTop(){
  const tb = document.getElementById('topbar');
  const dr = document.getElementById('t-drawer');
  if(tb && dr){
    dr.style.top = tb.offsetHeight + 'px';
  }
}
window.addEventListener('resize', updateDrawerTop);
updateDrawerTop();
setTimeout(updateDrawerTop, 200);


// ── Mouse animation: ripple on click + trailing glow dot ──
(function(){
  if (window.matchMedia('(pointer: coarse)').matches) return;

  // Trailing dot
  var dot = document.createElement('div');
  dot.style.cssText = 'position:fixed;width:8px;height:8px;border-radius:50%;background:#4BA3FF;pointer-events:none;z-index:99999;transform:translate(-50%,-50%);transition:opacity .3s;opacity:0;box-shadow:0 0 12px 3px rgba(75,163,255,.5);';
  document.body.appendChild(dot);

  // Lagged follower ring
  var ring = document.createElement('div');
  ring.style.cssText = 'position:fixed;width:28px;height:28px;border-radius:50%;border:1px solid rgba(75,163,255,.35);pointer-events:none;z-index:99998;transform:translate(-50%,-50%);transition:width .2s,height .2s,border-color .2s;opacity:0;';
  document.body.appendChild(ring);

  var mx=0,my=0,rx=0,ry=0,active=false;

  document.addEventListener('mousemove',function(e){
    mx=e.clientX; my=e.clientY;
    if(!active){ active=true; dot.style.opacity='1'; ring.style.opacity='1'; }
    dot.style.left=mx+'px'; dot.style.top=my+'px';
  },{passive:true});

  document.addEventListener('mouseleave',function(){ dot.style.opacity='0'; ring.style.opacity='0'; });
  document.addEventListener('mouseenter',function(){ if(active){ dot.style.opacity='1'; ring.style.opacity='1'; } });

  // Lag ring
  (function loop(){
    rx+=(mx-rx)*0.09; ry+=(my-ry)*0.09;
    ring.style.left=rx+'px'; ring.style.top=ry+'px';
    requestAnimationFrame(loop);
  })();

  // Ripple on click
  document.addEventListener('click',function(e){
    var r=document.createElement('div');
    r.style.cssText='position:fixed;border-radius:50%;pointer-events:none;z-index:99997;transform:translate(-50%,-50%) scale(0);background:rgba(75,163,255,.18);border:1px solid rgba(75,163,255,.3);transition:transform .5s ease,opacity .5s ease;';
    r.style.left=e.clientX+'px'; r.style.top=e.clientY+'px';
    r.style.width='60px'; r.style.height='60px';
    document.body.appendChild(r);
    requestAnimationFrame(function(){
      r.style.transform='translate(-50%,-50%) scale(1)';
      r.style.opacity='0';
    });
    setTimeout(function(){ r.remove(); },500);
  });

  // Hover: scale ring
  var hoverSel='button,a,[onclick],.grp,.grp-node-card,.tcard,.ql,.mcard,.nt';
  document.addEventListener('mouseover',function(e){
    if(e.target.closest(hoverSel)){
      ring.style.width='42px'; ring.style.height='42px';
      ring.style.borderColor='rgba(75,163,255,.6)';
      dot.style.background='#fff';
    }
  },{passive:true});
  document.addEventListener('mouseout',function(e){
    if(e.target.closest(hoverSel)){
      ring.style.width='28px'; ring.style.height='28px';
      ring.style.borderColor='rgba(75,163,255,.35)';
      dot.style.background='#4BA3FF';
    }
  },{passive:true});
})();
