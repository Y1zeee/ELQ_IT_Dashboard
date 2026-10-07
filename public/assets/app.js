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






// ─── NODE DETAIL CARD ───
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
function dashv(v){return (v&&v!=='—')?v:'—';}

// node → switch/port lookup (FIDS distribution)
const NODE_SW = {};
[FIDS_MAP_E1, FIDS_MAP_E2].forEach(function(map){
  map.forEach(function(s){ s.nodes.forEach(function(n){ NODE_SW[n.node||n.dev] = {sw:s.sw, port:n.port}; }); });
});

function ndFact(label, val, mono){
  var v = dashv(val);
  return '<button type="button" class="nd-fact' + (label==='SITA tag' ? ' sita' : '') + '"' + (v==='—' ? ' disabled' : '') + ' onclick="copyFact(this)" title="Click to copy">' +
    '<span class="nd-fl">' + label + '</span>' +
    '<span class="nd-fv' + (mono ? ' mono' : '') + '">' + esc(v) + '</span></button>';
}

function openNode(o){
  var ov = document.getElementById('nd-overlay');
  var card = document.getElementById('nd-card');
  if (!ov || !card) return;
  var assets = o.assets || [];
  var one = assets.length === 1 ? assets[0] : null;
  var sw = NODE_SW[o.name];
  var facts = '';
  if (one) {
    facts += ndFact('Serial number', one.sn, 1) + ndFact('SITA tag', one.xid, 1) +
             ndFact('Location', one.loc || o.loc) + ndFact('IP address', one.ip || o.ip, 1) +
             ndFact('Model', one.model) + ndFact('Type', one.type);
  } else {
    facts += ndFact('IP address', o.ip, 1) + ndFact('Location', o.loc) +
             ndFact('Group', o.group) + ndFact('Assets', String(assets.length));
  }
  if (sw) facts += ndFact('Switch', sw.sw, 1) + ndFact('Port', 'Port ' + sw.port, 1);
  facts += ndFact('Terminal', o.term);

  var list = '';
  if (!one && assets.length) {
    list = '<div class="nd-sec">ASSETS · ' + assets.length + '</div><div class="nd-assets">' +
      assets.map(function(a){
        return '<div class="nd-asset">' +
          '<div class="nd-asset-top"><span class="nd-asset-type">' + esc(a.type||'—') + '</span><span class="nd-asset-model">' + esc(a.model||'—') + '</span></div>' +
          '<div class="nd-asset-kv"><button type="button" onclick="copyFact(this)" ' + (dashv(a.sn)==='—'?'disabled':'') + '><i>SERIAL</i><b>' + esc(dashv(a.sn)) + '</b></button>' +
          '<button type="button" class="sita" onclick="copyFact(this)" ' + (dashv(a.xid)==='—'?'disabled':'') + '><i>SITA TAG</i><b>' + esc(dashv(a.xid)) + '</b></button></div>' +
          '</div>';
      }).join('') + '</div>';
  }

  card.style.setProperty('--c', o.color || 'var(--blu)');
  card.innerHTML =
    '<div class="nd-head">' +
      '<div class="nd-badges"><span class="nd-badge">' + esc(o.group||'') + '</span><span class="nd-badge dim">' + esc(o.term||'') + '</span></div>' +
      '<button type="button" class="nd-x" onclick="closeModal()" aria-label="Close">✕</button>' +
      '<h2 id="nd-title">' + esc(o.name) + '</h2>' +
      '<p>' + esc(o.desc||'') + '</p>' +
    '</div>' +
    '<div class="nd-body"><div class="nd-facts">' + facts + '</div>' + list + '</div>';
  ov.classList.add('on');
  document.body.style.overflow = 'hidden';
  var x = card.querySelector('.nd-x'); if (x) x.focus();
}

function copyFact(btn){
  var el = btn.querySelector('.nd-fv') || btn.querySelector('b');
  if (!el) return;
  var txt = el.textContent;
  var done = function(){ btn.classList.add('copied'); setTimeout(function(){ btn.classList.remove('copied'); }, 900); };
  try { navigator.clipboard.writeText(txt).then(done, function(){}); } catch (e) {}
}

function closeModal(){
  var ov = document.getElementById('nd-overlay');
  if (ov) ov.classList.remove('on');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function(e){
  if (e.key === 'Escape') closeModal();
});

// ─── PAGE HERO (reception banner shown on every page) ───
function heroHTML(c){
  return '<section class="dash-hero">' +
    '<div class="dash-hero-copy">' +
      '<div class="dash-hero-kicker"><span class="dash-hero-pulse"></span> ' + c.kicker + '</div>' +
      '<h1>' + c.title + '</h1>' +
      '<p>' + c.text + '</p>' +
      '<div class="dash-hero-meta">' + c.meta.map(function(m){ return '<span><b>' + m[0] + '</b> ' + m[1] + '</span>'; }).join('') + '</div>' +
    '</div>' +
    '<div class="dash-hero-orbit" aria-hidden="true">' +
      '<div class="hero-orbit-ring hero-orbit-ring-a"></div><div class="hero-orbit-ring hero-orbit-ring-b"></div>' +
      '<div class="hero-orbit-core"><span>' + c.core + '</span><small>ONLINE</small></div>' +
      '<div class="hero-plane">✈</div>' +
      '<i class="hero-node hero-node-a"></i><i class="hero-node hero-node-b"></i><i class="hero-node hero-node-c"></i>' +
    '</div></section>';
}


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
    b.classList.toggle('on', b.dataset.page===(id==='invterm'?'inventory':id==='nodes'?(nvTerm==='ELQ-2'?'elq2':nvTerm==='ELQ-1'?'elq1':'home'):id));
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
//  BUILD GROUP GRID
// ─────────────────────────────────────────
// Real asset count (some nodes have fewer records than assetPer suggests)
const grpAssets = g => g.nodes.reduce((a,n)=>a+g.getA(n).length,0);

function buildGrpGrid(elId,groups,term){
  const el=document.getElementById(elId);
  el.innerHTML='';
  groups.forEach(g=>{
    const totalAssets=grpAssets(g);
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
  setHero('hero-grp',{kicker:`${term} · ${g.desc.toUpperCase()}`,title:g.name,core:g.name,
    text:`${g.desc} — ${g.loc}.`,meta:[[g.nodes.length,'nodes'],[grpAssets(g),'assets']]});
  // Metrics
  const totalA=grpAssets(g);
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
var _grpNodes = [];

function typeChips(assets){
  var tc = {};
  assets.forEach(function(a){ var t = a.type || '—'; tc[t] = (tc[t]||0) + 1; });
  var ents = Object.keys(tc);
  var out = ents.slice(0,2).map(function(t){
    return '<span class="nc-chip" title="' + esc(t) + '">' + esc(t) + (tc[t] > 1 ? ' ×' + tc[t] : '') + '</span>';
  }).join('');
  if (ents.length > 2) out += '<span class="nc-chip more">+' + (ents.length - 2) + '</span>';
  return out;
}

function renderGrp(g, q) {
  var list = document.getElementById('grp-devlist');
  if (!list) return;
  list.innerHTML = '';
  _grpNodes = [];
  var shown = 0;
  var qLow = q ? q.toLowerCase() : '';

  g.nodes.forEach(function(nodeName) {
    var assets = g.getA(nodeName);
    var ip = assets.length ? assets[0].ip : '—';
    var matched = !qLow
      || nodeName.toLowerCase().indexOf(qLow) >= 0
      || (ip||'').toLowerCase().indexOf(qLow) >= 0
      || assets.some(function(a) {
           return (a.sn||'').toLowerCase().indexOf(qLow) >= 0
               || (a.xid||'').toLowerCase().indexOf(qLow) >= 0
               || (a.type||'').toLowerCase().indexOf(qLow) >= 0
               || (a.model||'').toLowerCase().indexOf(qLow) >= 0
               || (a.loc||'').toLowerCase().indexOf(qLow) >= 0;
         });
    if (!matched) return;
    shown++;

    var idx = _grpNodes.push({
      name:nodeName, color:g.color, group:g.name, desc:g.desc, loc:g.loc, term:curTerm, ip:ip, assets:assets
    }) - 1;
    var single = assets.length === 1 ? assets[0] : null;
    var card = document.createElement('button');
    card.type = 'button';
    card.className = 'nc';
    card.style.setProperty('--c', g.color);
    card.setAttribute('onclick', 'openNode(_grpNodes[' + idx + '])');
    card.innerHTML =
      '<div class="nc-top"><span class="nc-name">' + esc(nodeName) + '</span><span class="nc-n">' + assets.length + '</span></div>' +
      '<div class="nc-ip">' + esc(ip) + '</div>' +
      '<div class="nc-chips">' + (single && single.loc ? '<span class="nc-chip loc">' + esc(single.loc) + '</span>' : typeChips(assets)) + '</div>';
    list.appendChild(card);
  });

  var rc = document.getElementById('grp-rc');
  if (rc) rc.textContent = 'Showing ' + shown + ' of ' + g.nodes.length + ' nodes · tap a card for details';
}

// ─────────────────────────────────────────
//  FIDS
// ─────────────────────────────────────────
var FIDS_OPEN = {f1:new Set(), f2:new Set()};
var _fidsNodes = {f1:[], f2:[]};
const FIDS_BY_NODE = {};
FIDS1.concat(FIDS2).forEach(function(r){ FIDS_BY_NODE[r.node] = r; });

['f1','f2'].forEach(s=>{
  const data=s==='f1'?FIDS1:FIDS2;
  const sel=document.getElementById('g'+s);
  [...new Set(data.map(d=>d.group))].sort().forEach(g=>{const o=document.createElement('option');o.value=g;o.textContent=g;sel.appendChild(o);});
});

function fidsGroupInfo(s, key){
  var arr = s==='f1' ? E1_GROUPS : E2_GROUPS;
  return arr.find(function(g){ return g.name === key; }) || {color:'#9D7EF7', desc:key+' display controllers'};
}

function toggleFidsGrp(s, key){
  var set = FIDS_OPEN[s];
  if (set.has(key)) set.delete(key); else set.add(key);
  rFids(s);
}
function fidsAll(s, open){
  var data = s==='f1' ? FIDS1 : FIDS2;
  FIDS_OPEN[s] = new Set(open ? data.map(function(d){ return d.group; }) : []);
  rFids(s);
}
function openFidsNode(s,i){ openNode(_fidsNodes[s][i]); }

function rFids(s){
  const data=s==='f1'?FIDS1:FIDS2;
  const term=s==='f1'?'ELQ-1':'ELQ-2';
  const q=(document.getElementById('s'+s).value||'').toLowerCase();
  const gv=document.getElementById('g'+s).value;
  const cont=document.getElementById(`fids${s==='f1'?1:2}-sec`);
  const grouped={};
  _fidsNodes[s] = [];
  data.filter(d=>{
    if(gv!=='all'&&d.group!==gv)return false;
    if(q&&!d.node.toLowerCase().includes(q)&&!d.sn.toLowerCase().includes(q)&&!d.loc.toLowerCase().includes(q)&&!(d.xid||'').toLowerCase().includes(q)&&!(d.ip||'').includes(q))return false;
    return true;
  }).forEach(d=>{if(!grouped[d.group])grouped[d.group]=[];grouped[d.group].push(d);});
  let tot=0, html='';
  Object.entries(grouped).forEach(([gk,rows])=>{
    tot+=rows.length;
    const gi=fidsGroupInfo(s,gk);
    const open=q||gv!=='all'||FIDS_OPEN[s].has(gk);
    const cards=open?rows.map(d=>{
      const i=_fidsNodes[s].push({name:d.node,color:gi.color,group:gk,desc:gi.desc,loc:d.loc,term:term,ip:d.ip,
        assets:[{ip:d.ip,xid:d.xid,sn:d.sn,type:'FIDS Screen',model:d.model,loc:d.loc}]})-1;
      return `<button type="button" class="nc" style="--c:${gi.color}" onclick="openFidsNode('${s}',${i})">
        <div class="nc-top"><span class="nc-name">${esc(d.node)}</span></div>
        <div class="nc-ip">${esc(d.ip)}</div>
        <div class="nc-chips"><span class="nc-chip loc">${esc(d.loc)}</span></div></button>`;
    }).join(''):'';
    html+=`<div class="fsec${open?' open':''}" style="--c:${gi.color}">
      <button type="button" class="fsec-hdr" onclick="toggleFidsGrp('${s}','${gk}')" aria-expanded="${open?'true':'false'}">
        <span class="fsec-bar"></span>
        <span class="fsec-name">${gk}</span>
        <span class="fsec-desc">${esc(gi.desc)}</span>
        <span class="fsec-count">${rows.length}</span>
        <span class="fsec-chev">▾</span>
      </button>
      ${open?`<div class="nc-grid fsec-body">${cards}</div>`:''}
    </div>`;
  });
  cont.innerHTML=html||'<div class="empty-note">No screens match your search.</div>';
  document.getElementById(`rc-${s}`).textContent=`${tot} screens · tap a card for serial, SITA tag & location`;
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

// FIDS MAP renderer — one card per switch, one tile per node (tap for details)
var _fmNodes = [];
function openFmNode(i){ openNode(_fmNodes[i]); }
function buildFm(id, data, color, term, groupsArr) {
  const el = document.getElementById(id);
  let html = '';
  data.forEach(s => {
    const tiles = s.nodes.map(n => {
      const name = n.node || n.dev || '—';
      const r = FIDS_BY_NODE[name] || {};
      const gname = (name.match(/-([A-Z]{2}-DDC)/) || [])[1] || 'DDC';
      const gi = groupsArr.find(g => g.name === gname) || {color:color, desc:'Display controller'};
      const i = _fmNodes.push({name:name, color:gi.color, group:gname, desc:gi.desc, loc:n.loc||r.loc, term:term, ip:n.ip||r.ip,
        assets:[{ip:n.ip||r.ip, xid:r.xid, sn:r.sn, type:'FIDS Screen', model:r.model, loc:n.loc||r.loc}]}) - 1;
      return `<button type="button" class="pf-tile" onclick="openFmNode(${i})">
        <span class="pf-port">${n.port||'—'}</span>
        <span class="pf-txt"><b>${esc(name)}</b><i>${esc(n.loc||r.loc||'')}</i></span>
      </button>`;
    }).join('');
    html += `
      <div class="pf-card" style="--c:${color}">
        <div class="pf-hdr">
          <div><div class="pf-sw">${esc(s.sw)}</div><div class="pf-room">${esc(s.room)}</div></div>
          <span class="pf-count">${s.nodes.length} nodes</span>
        </div>
        <div class="pf-tiles">${tiles}</div>
      </div>`;
  });
  el.innerHTML = html;
}
buildFm('fm-e1', FIDS_MAP_E1, '#9D7EF7', 'ELQ-1', E1_GROUPS);
buildFm('fm-e2', FIDS_MAP_E2, '#1FD8C8', 'ELQ-2', E2_GROUPS);


// ─────────────────────────────────────────
//  INVENTORY — two big terminal cards → category cards
// ─────────────────────────────────────────
const INV_TERMS = {
  'ELQ-1': {data:INV_E1, groups:E1_GROUPS, color:'#59C7FF', title:'Terminal 1', cls:'t1'},
  'ELQ-2': {data:INV_E2, groups:E2_GROUPS, color:'#2CE0D0', title:'Terminal 2', cls:'t2'}
};
const CORE_CAT_DESC = {'CSF-W':'Cisco Security Firewall','SSS':'Core Switches','ESXI':'ESXi Servers','VASL':'Storage Server',
  'PFMN':'PFM Servers','SAN':'SAN Storage','PROXY':'Proxy Server','BOC':'Back Office Computer'};
const invSum = d => d.reduce((a,x)=>a+x.assets,0);
function invGroup(term,cat){
  const name = cat==='EGATE' ? 'PFM' : cat;
  return INV_TERMS[term].groups.find(g=>g.name.toUpperCase()===name);
}

function buildInvCards(){
  const el = document.getElementById('inv-cards');
  if(!el) return;
  el.innerHTML = Object.entries(INV_TERMS).map(([term,t])=>{
    const tot = invSum(t.data);
    const sorted = [...t.data].sort((a,b)=>b.assets-a.assets);
    const stack = sorted.slice(0,8).map((d,i)=>`<i style="width:${d.assets/tot*100}%;opacity:${1-i*.09}"></i>`).join('');
    const legend = sorted.slice(0,6).map(d=>`<span><b>${d.assets}</b> ${d.cat}</span>`).join('');
    return `<div class="inv-big ${t.cls}" style="--c:${t.color}" role="button" tabindex="0" onclick="openInvTerm('${term}')" onkeydown="if(event.key==='Enter')openInvTerm('${term}')">
      <div class="tcard-top"><span class="tbadge ${t.cls}">${term}</span><span class="tarr">→</span></div>
      <div class="inv-big-title">${t.title} Inventory</div>
      <div class="inv-big-num">${tot}<span>assets</span></div>
      <div class="inv-big-sub">${t.data.length} categories · tap to browse each one</div>
      <div class="inv-stack">${stack}</div>
      <div class="inv-legend">${legend}</div>
    </div>`;
  }).join('');
  const sp = document.getElementById('inv-spare');
  if(sp) sp.innerHTML = INV_SPARE.map(d=>`<div class="inv-spare"><span class="badge ba">SPARE</span><b>${d.assets}</b> assets in stock <i>· ${d.loc}</i></div>`).join('');
}

var curInvTerm = null;
function openInvTerm(term){
  curInvTerm = term;
  const t = INV_TERMS[term];
  document.getElementById('invt-bc').innerHTML = `
    <span class="bc-a" onclick="nav('home')">Home</span><span class="bc-sep">/</span>
    <span class="bc-a" onclick="nav('inventory')">Inventory</span><span class="bc-sep">/</span>
    <span class="bc-cur" style="color:${t.color}">${term}</span>`;
  setHero('hero-invterm', {kicker:`${term} · INVENTORY`, title:`${term} Inventory`, core:term,
    text:`Every category in ${t.title}, with its location and asset count.`,
    meta:[[invSum(t.data),'assets'],[t.data.length,'categories']]});
  document.getElementById('invt-q').value = '';
  renderInvTerm();
  nav('invterm');
}

function renderInvTerm(){
  if(!curInvTerm) return;
  const t = INV_TERMS[curInvTerm];
  const q = (document.getElementById('invt-q').value||'').toLowerCase();
  const max = Math.max(...t.data.map(d=>d.assets));
  const rows = t.data.filter(d=>!q||d.cat.toLowerCase().includes(q)||d.loc.toLowerCase().includes(q));
  document.getElementById('invt-grid').innerHTML = rows.map(d=>{
    const g = invGroup(curInvTerm,d.cat);
    const core = CORE_CAT_DESC[d.cat];
    const color = g ? g.color : t.color;
    const desc = g ? g.desc : (core || d.cat);
    const click = g ? `openGrp(INV_TERMS['${curInvTerm}'].groups.find(x=>x.key==='${g.key}'),'${curInvTerm}')` : (core ? "nav('cabinets')" : '');
    return `<div class="cat-card${click?' go':''}" style="--c:${color}" ${click?`role="button" tabindex="0" onclick="${click}" onkeydown="if(event.key==='Enter'){${click}}"`:''}>
      <div class="cat-top"><span class="cat-name">${d.cat}</span><span class="cat-num">${d.assets}</span></div>
      <div class="cat-desc">${esc(desc)}</div>
      <div class="cat-loc">${esc(d.loc)}</div>
      <div class="cat-bar"><i style="width:${Math.max(4,d.assets/max*100)}%"></i></div>
      <div class="cat-foot"><span>${g?g.nodes.length+' nodes':(core?'Core room':'—')}</span><span>${click?(g?'Browse →':'Cabinets →'):''}</span></div>
    </div>`;
  }).join('') || '<div class="empty-note">No categories match.</div>';
  document.getElementById('invt-rc').textContent = `${rows.length} of ${t.data.length} categories`;
}

// ─────────────────────────────────────────
//  MISSING DATA — assets without SITA tag / serial number
// ─────────────────────────────────────────
const isBlank = v => !v || v === '—';
const ASSET_RECORDS = (() => {
  const out = [];
  [[E1_GROUPS,'ELQ-1'],[E2_GROUPS,'ELQ-2']].forEach(([gs,term]) => gs.forEach(g => g.nodes.forEach(n => {
    const a = g.getA(n);
    // A node listed with no asset record is missing both values
    if (!a.length) out.push({term, g, node:n, type:'No asset record', model:'', sn:'', xid:'', ip:'', loc:g.loc});
    a.forEach(x => out.push({term, g, node:n, type:x.type || '—', model:x.model || '', sn:isBlank(x.sn) ? '' : x.sn,
      xid:isBlank(x.xid) ? '' : x.xid, ip:isBlank(x.ip) ? '' : x.ip, loc:x.loc || g.loc}));
  })));
  return out;
})();
const MISSING = {
  xid: ASSET_RECORDS.filter(r => !r.xid),
  sn:  ASSET_RECORDS.filter(r => !r.sn)
};
var missKind = 'xid';

function setMissKind(k){
  missKind = k;
  document.querySelectorAll('#pg-missing .miss-tab').forEach(b => b.classList.toggle('on', b.dataset.k === k));
  renderMissing();
}
function openMissNode(i){
  const r = _missShown[i];
  openNode({name:r.node, color:r.g.color, group:r.g.name, desc:r.g.desc, loc:r.g.loc, term:r.term,
    ip:r.ip, assets:r.g.getA(r.node)});
}
var _missShown = [];
function renderMissing(){
  const q = (document.getElementById('miss-q').value || '').toLowerCase();
  const tv = document.getElementById('miss-t').value;
  const rows = MISSING[missKind].filter(r =>
    (tv === 'all' || r.term === tv) &&
    (!q || [r.node, r.type, r.model, r.sn, r.xid, r.g.name, r.loc].some(v => (v || '').toLowerCase().includes(q))));
  _missShown = rows;
  const groups = {};
  rows.forEach((r,i) => { const k = r.term + ' · ' + r.g.name; (groups[k] = groups[k] || {g:r.g, items:[]}).items.push(i); });
  const other = missKind === 'xid' ? 'sn' : 'xid';
  document.getElementById('miss-list').innerHTML = Object.entries(groups).map(([k,{g,items}]) => `
    <div class="miss-sec" style="--c:${g.color}">
      <div class="miss-hdr"><span class="fsec-bar"></span><span class="fsec-name">${esc(k)}</span><span class="fsec-desc">${esc(g.desc)}</span><span class="fsec-count">${items.length}</span></div>
      <div class="nc-grid">${items.map(i => { const r = rows[i]; return `
        <button type="button" class="nc" style="--c:${g.color}" onclick="openMissNode(${i})">
          <div class="nc-top"><span class="nc-name">${esc(r.type)}</span></div>
          <div class="nc-ip">${esc(r.node)}</div>
          <div class="miss-model">${esc(r.model || '—')}</div>
          <div class="nc-chips">
            <span class="nc-chip miss-flag">${missKind === 'xid' ? 'No SITA tag' : 'No serial'}</span>
            ${r[other] ? `<span class="nc-chip ${other === 'xid' ? 'miss-sita' : ''}">${esc(r[other])}</span>` : `<span class="nc-chip miss-flag">${other === 'xid' ? 'No SITA tag' : 'No serial'}</span>`}
          </div>
        </button>`; }).join('')}</div>
    </div>`).join('') || '<div class="empty-note">Nothing missing here.</div>';
  document.getElementById('miss-rc').textContent = `${rows.length} assets · tap a card to see the full node`;
}

function missSpec(){
  const label = missKind === 'xid' ? 'without SITA tag' : 'without serial number';
  const rows = MISSING[missKind].map(r => [r.term, r.g.name, r.node, r.type, r.model, r.ip, r.loc, r.sn, r.xid]);
  return {file:`ELQ_Assets_${missKind === 'xid' ? 'No_SITA_Tag' : 'No_Serial'}`, sheet:label, band:2, rows,
    title:`ELQ Airport — Assets ${label} (${rows.length})`,
    cols:[{h:'TERMINAL'},{h:'GROUP',code:1},{h:'NODE',code:1},{h:'TYPE'},{h:'MODEL'},{h:'IP ADDRESS',code:1},{h:'LOCATION'},{h:'SERIAL NUMBER',code:1},{h:'SITA TAG',code:1,sita:1}]};
}
function xlsxMissing(){ doXlsx(missSpec()); }
function csvMissing(){ doCsv(missSpec()); }

// ─────────────────────────────────────────
//  NODE VIEWS — clickable counters (nodes / FIDS / workstations / assets)
// ─────────────────────────────────────────
const TERM_GROUPS = {'ELQ-1':E1_GROUPS, 'ELQ-2':E2_GROUPS};
const isFidsGrp = g => /-DDC$/.test(g.name);
const NODE_KINDS = {
  all:    {label:'All nodes',    test:() => true,          color:'var(--blu)'},
  fids:   {label:'FIDS screens', test:isFidsGrp,           color:'var(--pur)'},
  wks:    {label:'Workstations', test:g => !isFidsGrp(g),  color:'var(--amb)'},
  assets: {label:'All assets',   test:() => true,          color:'var(--grn)'}
};
function termStats(term){
  const gs = TERM_GROUPS[term], sum = f => gs.filter(f).reduce((a,g) => a + g.nodes.length, 0);
  return {groups:gs.length, nodes:sum(() => true), fids:sum(isFidsGrp), wks:sum(g => !isFidsGrp(g)),
          assets:gs.reduce((a,g) => a + grpAssets(g), 0)};
}
// Counter tile that opens the matching node view
function statTile(term, kind, value, label, sub, color){
  return `<div class="mcard mc-go" role="button" tabindex="0" style="--mc-c:${color}" onclick="openNodeView('${term}','${kind}')" onkeydown="if(event.key==='Enter')openNodeView('${term}','${kind}')">
    <div class="mv">${value}</div><div class="ml">${label}</div><div class="ms">${sub}</div><span class="mc-arr">→</span></div>`;
}
function buildTermStrips(){
  [['ELQ-1','ms-e1','var(--blu)'],['ELQ-2','ms-e2','var(--tel)']].forEach(([t,id,c]) => {
    const s = termStats(t), el = document.getElementById(id); if (!el) return;
    el.innerHTML = statTile(t,'all',s.nodes,'Total Nodes',`${s.groups} groups`,c) +
      statTile(t,'fids',s.fids,'FIDS Screens','tap to view','var(--pur)') +
      statTile(t,'wks',s.wks,'Workstations','tap to view','var(--amb)') +
      statTile(t,'assets',s.assets,'Total Assets','in device groups','var(--grn)');
  });
  // Home: terminal cards
  [['ELQ-1','1','var(--blu)',4],['ELQ-2','2','var(--tel)',3]].forEach(([t,n,c,cab]) => {
    const s = termStats(t);
    const sub = document.getElementById('tc-sub-'+n); if (sub) sub.textContent = `${s.groups} device groups · ${s.assets} assets`;
    const st = document.getElementById('tc-stats-'+n); if (!st) return;
    const tile = (v,l,col,go) => `<div class="tstat ts-go" role="button" tabindex="0" onclick="event.stopPropagation();${go}" onkeydown="if(event.key==='Enter'){event.stopPropagation();${go}}"><div class="tstat-v" style="color:${col}">${v}</div><div class="tstat-l">${l} →</div></div>`;
    st.innerHTML = tile(s.nodes,'Nodes',c,`openNodeView('${t}','all')`) + tile(s.fids,'FIDS','var(--pur)',`openNodeView('${t}','fids')`) +
      tile(s.wks,'WKS','var(--amb)',`openNodeView('${t}','wks')`) + tile(cab,'Cabinets','var(--grn)',"nav('cabinets')");
  });
  // Home: top counters
  const e1 = termStats('ELQ-1'), e2 = termStats('ELQ-2'), hm = document.getElementById('ms-home');
  if (hm) hm.innerHTML = statTile('ELQ-1','all',e1.nodes,'ELQ-1 Nodes',`${e1.groups} groups`,'var(--blu)') +
    statTile('ELQ-2','all',e2.nodes,'ELQ-2 Nodes',`${e2.groups} groups`,'var(--tel)') +
    statTile('both','fids',e1.fids + e2.fids,'FIDS Screens','LG + NEC','var(--pur)') +
    `<div class="mcard mc-go" role="button" tabindex="0" style="--mc-c:var(--amb)" onclick="nav('inventory')" onkeydown="if(event.key==='Enter')nav('inventory')"><div class="mv">355</div><div class="ml">Total Assets</div><div class="ms">both terminals</div><span class="mc-arr">→</span></div>` +
    `<div class="mcard mc-go" role="button" tabindex="0" style="--mc-c:var(--grn)" onclick="nav('ports')" onkeydown="if(event.key==='Enter')nav('ports')"><div class="mv">10</div><div class="ml">Switches</div><div class="ms">core + access</div><span class="mc-arr">→</span></div>`;
}

var nvTerm = 'ELQ-1', nvKind = 'all', _nvNodes = [];
function openNodeView(term, kind){
  nvTerm = term; nvKind = kind;
  const k = NODE_KINDS[kind], terms = term === 'both' ? ['ELQ-1','ELQ-2'] : [term];
  const tLabel = term === 'both' ? 'Both terminals' : term;
  const back = term === 'both' ? '' : `<span class="bc-a" onclick="nav('${term === 'ELQ-1' ? 'elq1' : 'elq2'}')">${term}</span><span class="bc-sep">/</span>`;
  document.getElementById('nv-bc').innerHTML = `<span class="bc-a" onclick="nav('home')">Home</span><span class="bc-sep">/</span>${back}<span class="bc-cur">${k.label}</span>`;
  const gs = terms.flatMap(t => TERM_GROUPS[t].filter(k.test).map(g => [t,g]));
  const nodes = gs.reduce((a,[,g]) => a + g.nodes.length, 0), assets = gs.reduce((a,[,g]) => a + grpAssets(g), 0);
  setHero('hero-nodes', {kicker:`${tLabel.toUpperCase()} · ${k.label.toUpperCase()}`, title:k.label, core:term === 'both' ? 'ELQ' : term,
    text:`${k.label} in ${tLabel === 'Both terminals' ? 'both terminals' : tLabel}, grouped by system. Tap a card for serial, SITA tag and location.`,
    meta:[[nodes,'nodes'],[assets,'assets'],[gs.length,'groups']]});
  document.getElementById('nv-q').value = '';
  renderNodeView();
  nav('nodes');
}
function renderNodeView(){
  const k = NODE_KINDS[nvKind], terms = nvTerm === 'both' ? ['ELQ-1','ELQ-2'] : [nvTerm];
  const q = (document.getElementById('nv-q').value || '').toLowerCase();
  _nvNodes = [];
  let shown = 0;
  const html = terms.flatMap(t => TERM_GROUPS[t].filter(k.test).map(g => {
    const cards = g.nodes.map(n => {
      const a = g.getA(n), ip = a.length ? a[0].ip : '—';
      if (q && ![n, ip, ...a.flatMap(x => [x.sn, x.xid, x.type, x.model, x.loc])].some(v => (v || '').toLowerCase().includes(q))) return '';
      shown++;
      const i = _nvNodes.push({name:n, color:g.color, group:g.name, desc:g.desc, loc:g.loc, term:t, ip, assets:a}) - 1;
      const one = a.length === 1 ? a[0] : null;
      return `<button type="button" class="nc" style="--c:${g.color}" onclick="openNode(_nvNodes[${i}])">
        <div class="nc-top"><span class="nc-name">${esc(n)}</span><span class="nc-n">${a.length}</span></div>
        <div class="nc-ip">${esc(ip || '—')}</div>
        <div class="nc-chips">${one && one.loc ? `<span class="nc-chip loc">${esc(one.loc)}</span>` : typeChips(a)}</div></button>`;
    }).join('');
    if (!cards) return '';
    return `<div class="miss-sec" style="--c:${g.color}">
      <div class="miss-hdr"><span class="fsec-bar"></span><span class="fsec-name">${terms.length > 1 ? t + ' · ' : ''}${g.name}</span><span class="fsec-desc">${esc(g.desc)}</span><span class="fsec-count">${g.nodes.length}</span></div>
      <div class="nc-grid">${cards}</div></div>`;
  })).join('');
  document.getElementById('nv-list').innerHTML = html || '<div class="empty-note">No nodes match your search.</div>';
  document.getElementById('nv-rc').textContent = `${shown} nodes · tap a card for details`;
}
function nvExportSpec(){
  const k = NODE_KINDS[nvKind], terms = nvTerm === 'both' ? ['ELQ-1','ELQ-2'] : [nvTerm], rows = [];
  terms.forEach(t => TERM_GROUPS[t].filter(k.test).forEach(g => g.nodes.forEach(n => {
    const a = g.getA(n);
    if (!a.length) rows.push([t, g.name, n, '', '', '', '', '', '']);
    a.forEach(x => rows.push([t, g.name, n, blank(x.ip), blank(x.type), blank(x.model), blank(x.sn), blank(x.xid), blank(x.loc)]));
  })));
  const tl = nvTerm === 'both' ? 'ELQ' : nvTerm;
  return {file:`ELQ_${tl}_${k.label.replace(/ /g,'_')}`, sheet:k.label, title:`${tl} — ${k.label}`, band:2, rows,
    cols:[{h:'TERMINAL'},{h:'GROUP',code:1},{h:'NODE',code:1},{h:'IP ADDRESS',code:1},{h:'TYPE'},{h:'MODEL'},{h:'SERIAL NUMBER',code:1},{h:'SITA TAG',code:1,sita:1},{h:'LOCATION'}]};
}
function xlsxNodes(){ doXlsx(nvExportSpec()); }
function csvNodes(){ doCsv(nvExportSpec()); }

// ─────────────────────────────────────────
//  HERO BANNERS (shown on every page)
// ─────────────────────────────────────────
function setHero(id, cfg){ const el=document.getElementById(id); if(el) el.innerHTML = heroHTML(cfg); }
const fidsGroups = d => new Set(d.map(x=>x.group)).size;
const PAGE_HEROES = {
  elq1:{kicker:'TERMINAL 1 · LIVE NETWORK', title:'ELQ-1', core:'ELQ-1',
    text:'Check-in, gates, FIDS and core room assets for Terminal 1.', meta:[[termStats('ELQ-1').nodes,'nodes'],[termStats('ELQ-1').assets,'assets'],[FIDS1.length,'FIDS screens']]},
  elq2:{kicker:'TERMINAL 2 · LIVE NETWORK', title:'ELQ-2', core:'ELQ-2',
    text:'Check-in, gates, FIDS and public area assets for Terminal 2.', meta:[[termStats('ELQ-2').nodes,'nodes'],[termStats('ELQ-2').assets,'assets'],[FIDS2.length,'FIDS screens']]},
  fids1:{kicker:'FIDS · ELQ-1', title:'FIDS<br><span>Terminal 1</span>', core:'FIDS',
    text:'LG digital signage controllers across check-in, gates and arrivals.', meta:[[FIDS1.length,'screens'],[fidsGroups(FIDS1),'groups'],['LG','signage']]},
  fids2:{kicker:'FIDS · ELQ-2', title:'FIDS<br><span>Terminal 2</span>', core:'FIDS',
    text:'NEC display controllers across check-in, departures and arrivals.', meta:[[FIDS2.length,'screens'],[fidsGroups(FIDS2),'groups'],['NEC','signage']]},
  ports:{kicker:'NETWORK · SWITCH MAPPING', title:'Port<br><span>Map</span>', core:'NET',
    text:'Which device is plugged into which switch port, per room and terminal.', meta:[[10,'switches'],[FIDS1.length+FIDS2.length,'FIDS nodes mapped']]},
  inventory:{kicker:'ASSET REGISTER', title:'Inventory', core:'INV',
    text:'Every tracked asset in both terminals, organised by category.', meta:[[355,'assets'],[2,'terminals'],[41,'spare']]},
  missing:{kicker:'DATA QUALITY · ASSET REGISTER', title:'Missing<br><span>Tags</span>', core:'TAGS',
    text:'Devices that still have no SITA tag or no serial number, grouped by terminal and system.', meta:[[MISSING.xid.length,'without SITA tag'],[MISSING.sn.length,'without serial']]},
  summary:{kicker:'EQUIPMENT COUNTS', title:'Summary', core:'SUM',
    text:'Online and spare equipment totals by system.', meta:[[4,'systems']]}
};
function initHeroes(){
  Object.entries(PAGE_HEROES).forEach(([k,c])=>{
    const bc = document.querySelector('#pg-'+k+' .bc');
    if(bc) bc.insertAdjacentHTML('afterend','<div class="page-hero">'+heroHTML(c)+'</div>');
  });
}
initHeroes();

// ─────────────────────────────────────────
//  HOME — terminal card summaries
// ─────────────────────────────────────────
function fillTermCats(){
  [['tc-cats-1',INV_E1],['tc-cats-2',INV_E2]].forEach(([id,d])=>{
    const el=document.getElementById(id); if(!el) return;
    el.innerHTML=[...d].sort((a,b)=>b.assets-a.assets).slice(0,6).map(x=>`<span><b>${x.assets}</b> ${x.cat}</span>`).join('');
  });
}
fillTermCats();
buildInvCards();
buildTermStrips();
renderMissing();
document.getElementById('ql-miss-count').textContent = `${MISSING.xid.length} no tag · ${MISSING.sn.length} no serial`;
document.getElementById('miss-n-xid').textContent = MISSING.xid.length;
document.getElementById('miss-n-sn').textContent = MISSING.sn.length;

// ─────────────────────────────────────────
//  SUMMARY
// ─────────────────────────────────────────
function rSum(id,data){document.getElementById(id).innerHTML=data.map((d,i)=>`<tr><td style="font-family:var(--mono);font-size:9px;color:var(--t3)">${i+1}</td><td>${d.type}</td><td>${d.online}</td><td>${d.spare}</td><td>${d.online+d.spare}</td></tr>`).join('');}
rSum('sum-cute',SUM.cute);rSum('sum-pfm',SUM.pfm);rSum('sum-fidsams',SUM.fidsams);rSum('sum-egate',SUM.egate);

// ─────────────────────────────────────────
//  EXPORT HELPERS
// ─────────────────────────────────────────
// Every export goes through one spec: {file, title, sheet, cols:[{h,num,code,sita}], rows, band, totals}
// - band: column index whose value change starts a new zebra band (keeps a node's assets together)
// - totals: rows appended after a blank row in Excel only (CSV stays raw data)
const blank = v => (v == null || v === '—') ? '' : v;
const SHEET = {
  navy:'FF0B1B2D', head:'FF1F4E79', band:'FFEAF2FB', line:'FFB4C6DC', sub:'FF5A7A9A',
  sita:'FFC55A11', total:'FFFFF2CC', white:'FFFFFFFF'
};

function grpSpec(g, term){
  const hasLoc = g.nodes.some(n => g.getA(n).some(a => a.loc));
  const rows = [];
  g.nodes.forEach(n => g.getA(n).forEach(a => rows.push(
    [n, blank(a.ip), blank(a.type), blank(a.model), blank(a.sn), blank(a.xid)].concat(hasLoc ? [blank(a.loc)] : [])
  )));
  return {file:`ELQ_${term}_${g.name}`, sheet:g.name, title:`${term} · ${g.name} — ${g.desc} (${g.loc})`, band:0, rows,
    cols:[{h:'NODE',code:1},{h:'IP ADDRESS',code:1},{h:'TYPE'},{h:'MODEL'},{h:'SERIAL NUMBER',code:1},{h:'SITA TAG',code:1,sita:1}]
      .concat(hasLoc ? [{h:'LOCATION'}] : [])};
}
function fidsSpec(s){
  const d = (s==='f1' ? FIDS1 : FIDS2).slice().sort((a,b) => a.group.localeCompare(b.group) || a.node.localeCompare(b.node));
  const term = s==='f1' ? 'ELQ-1' : 'ELQ-2';
  return {file:`ELQ_FIDS_${term}`, sheet:`FIDS ${term}`, title:`FIDS · ${term} — ${d.length} screens (${s==='f1'?'LG Digital Signage':'NEC'})`, band:0,
    cols:[{h:'GROUP',code:1},{h:'NODE',code:1},{h:'IP ADDRESS',code:1},{h:'LOCATION'},{h:'SERIAL NUMBER',code:1},{h:'SITA TAG',code:1,sita:1},{h:'MODEL'},{h:'SWITCH',code:1},{h:'PORT',num:1}],
    rows:d.map(r => { const sw = NODE_SW[r.node] || {}; return [r.group, r.node, blank(r.ip), blank(r.loc), blank(r.sn), blank(r.xid), r.model, blank(sw.sw), sw.port == null ? '' : sw.port]; })};
}
function invSpec(){
  const rows = [], totals = [];
  Object.entries(INV_TERMS).forEach(([term,t]) => {
    [...t.data].sort((a,b) => b.assets - a.assets).forEach(d => {
      const g = invGroup(term, d.cat);
      rows.push([term, d.cat, g ? g.desc : (CORE_CAT_DESC[d.cat] || ''), d.loc, g ? g.nodes.length : '', d.assets]);
    });
    totals.push([`${term} total`, '', '', '', '', invSum(t.data)]);
  });
  INV_SPARE.forEach(d => rows.push(['Spare', d.cat, 'Spare stock', d.loc, '', d.assets]));
  totals.push(['Grand total', '', '', '', '', invSum(INV_E1) + invSum(INV_E2) + invSum(INV_SPARE)]);
  return {file:'ELQ_Inventory', sheet:'Inventory', title:'ELQ Airport — Inventory by terminal and category', band:0, rows, totals,
    cols:[{h:'TERMINAL'},{h:'CATEGORY',code:1},{h:'DESCRIPTION'},{h:'LOCATION'},{h:'NODES',num:1},{h:'ASSETS',num:1}]};
}
const SUM_TITLES = {cute:'CUTE equipment', pfm:'PFM', fidsams:'FIDS / AMS', egate:'E-Gates'};
function sumSpec(s){
  const d = SUM[s];
  const on = d.reduce((a,r) => a + r.online, 0), sp = d.reduce((a,r) => a + r.spare, 0);
  return {file:`ELQ_Summary_${s.toUpperCase()}`, sheet:SUM_TITLES[s], title:`Equipment summary — ${SUM_TITLES[s]}`,
    cols:[{h:'#',num:1},{h:'TYPE'},{h:'ONLINE',num:1},{h:'SPARE',num:1},{h:'TOTAL',num:1}],
    rows:d.map((r,i) => [i+1, r.type, r.online, r.spare, r.online + r.spare]), totals:[['', 'Total', on, sp, on + sp]]};
}
function cabSpec(){
  const rows = [...document.querySelectorAll('#cabinet-table tbody tr')]
    .map(row => [...row.cells].map(c => blank(c.textContent.trim())))
    .map(([tag,node,sn,type,model,room]) => [room, type, node, model, sn, tag]);
  return {file:'ELQ_Cabinets', sheet:'Cabinets', title:'ELQ-1 Core Room — Cabinet equipment', band:1, rows,
    cols:[{h:'ROOM'},{h:'EQUIPMENT TYPE'},{h:'NODE',code:1},{h:'MODEL'},{h:'SERIAL NUMBER',code:1},{h:'SITA TAG',code:1,sita:1}]};
}

function doCsv(spec){
  const q = c => '"' + String(c).replace(/"/g,'""') + '"';
  const csv = '﻿' + [spec.cols.map(c => c.h), ...spec.rows].map(r => r.map(q).join(',')).join('\r\n');
  dl(spec.file + '_' + today() + '.csv', 'text/csv;charset=utf-8', csv);
}

var _excelJs = null;
function loadExcel(){
  if (window.ExcelJS) return Promise.resolve();
  if (!_excelJs) _excelJs = new Promise((ok, fail) => {
    const s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/exceljs/4.4.0/exceljs.min.js';
    s.onload = ok; s.onerror = () => { _excelJs = null; fail(); };
    document.head.appendChild(s);
  });
  return _excelJs;
}

async function doXlsx(spec){
  try { await loadExcel(); } catch (e) { alert('Could not load the Excel library. Check your connection and try again.'); return; }
  const n = spec.cols.length, fill = argb => ({type:'pattern', pattern:'solid', fgColor:{argb}});
  const border = {top:{style:'thin',color:{argb:SHEET.line}}, bottom:{style:'thin',color:{argb:SHEET.line}},
                  left:{style:'thin',color:{argb:SHEET.line}}, right:{style:'thin',color:{argb:SHEET.line}}};
  const wb = new ExcelJS.Workbook(); wb.creator = 'ELQ Airport IT';
  const ws = wb.addWorksheet(spec.sheet.replace(/[\\\/?*\[\]:]/g,' ').slice(0,31), {views:[{state:'frozen', ySplit:3}]});

  ws.mergeCells(1,1,1,n);
  Object.assign(ws.getCell(1,1), {value:spec.title, font:{bold:true, size:14, color:{argb:SHEET.white}}, fill:fill(SHEET.navy), alignment:{vertical:'middle', indent:1}});
  ws.getRow(1).height = 30;
  ws.mergeCells(2,1,2,n);
  Object.assign(ws.getCell(2,1), {value:`${spec.rows.length} rows · exported ${new Date().toLocaleString()}`, font:{italic:true, size:9, color:{argb:SHEET.sub}}, alignment:{indent:1}});

  const hr = ws.getRow(3); hr.height = 22;
  spec.cols.forEach((c,i) => Object.assign(hr.getCell(i+1), {value:c.h, font:{bold:true, color:{argb:SHEET.white}}, fill:fill(SHEET.head), border,
    alignment:{vertical:'middle', horizontal:c.num ? 'right' : 'left'}}));

  let shade = false, prev;
  spec.rows.forEach((r,ri) => {
    if (spec.band != null) { if (ri && r[spec.band] !== prev) shade = !shade; prev = r[spec.band]; }
    else shade = ri % 2 === 1;
    const row = ws.addRow(r);
    spec.cols.forEach((c,i) => {
      const cell = row.getCell(i+1);
      cell.border = border;
      if (shade) cell.fill = fill(SHEET.band);
      if (c.code) cell.font = {name:'Consolas', size:10};
      if (c.sita) cell.font = {name:'Consolas', size:10, bold:true, color:{argb:SHEET.sita}};
      cell.alignment = {vertical:'middle', horizontal:c.num ? 'right' : 'left'};
    });
  });
  ws.autoFilter = {from:{row:3, column:1}, to:{row:3, column:n}};

  if (spec.totals) {
    ws.addRow([]);
    spec.totals.forEach(t => {
      const row = ws.addRow(t);
      spec.cols.forEach((c,i) => Object.assign(row.getCell(i+1), {font:{bold:true}, fill:fill(SHEET.total), border,
        alignment:{horizontal:c.num ? 'right' : 'left'}}));
    });
  }

  spec.cols.forEach((c,i) => {
    const len = Math.max(c.h.length, ...spec.rows.map(r => String(r[i] == null ? '' : r[i]).length));
    ws.getColumn(i+1).width = Math.min(48, Math.max(8, len + 3));
  });

  const buf = await wb.xlsx.writeBuffer();
  dl(spec.file + '_' + today() + '.xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', buf);
}

function expGrpXlsx(g){ doXlsx(grpSpec(g, curTerm)); }
function expGrpCsv(g){ doCsv(grpSpec(g, curTerm)); }
function xlsxF(s){ doXlsx(fidsSpec(s)); }
function csvF(s){ doCsv(fidsSpec(s)); }
function xlsxInv(){ doXlsx(invSpec()); }
function csvInv(){ doCsv(invSpec()); }
function xlsxSum(s){ doXlsx(sumSpec(s)); }
function csvSum(s){ doCsv(sumSpec(s)); }
function xlsxCabinets(){ doXlsx(cabSpec()); }
function csvCabinets(){ doCsv(cabSpec()); }
// Inside the claude.ai viewer the page is sandboxed, so files go through the
// viewer's "downloads" capability; on the normal site a plain link download works.
var _dlCap = null;
async function dl(n,t,c){
  const blob = new Blob([c],{type:t});
  if (window.claude && typeof window.claude.use === 'function') {
    _dlCap = _dlCap || window.claude.use('downloads').catch(() => null);
    const d = await _dlCap;
    if (d) {
      try { await d.save({filename:n, data:blob}); }
      catch (e) { if (!e || e.code !== 'declined') alert('Download not available here (' + ((e && e.code) || 'error') + ').'); }
      return;
    }
  }
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = n; a.rel = 'noopener';
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000);
}
function today(){return new Date().toISOString().slice(0,10);}



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
  var hoverSel='button,a,[onclick],.grp,.nc,.pf-tile,.cat-card,.inv-big,.fsec-hdr,.tcard,.ql,.mcard,.nt';
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
