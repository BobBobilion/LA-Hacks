
export default async function getGrades(username, password){

    const cheerio = require('cheerio');
    const $ = cheerio.load(Grade)
  
    var classes = $('a.TextHeading').text().split("AP ")
    classes.splice(0,1);
  
    classes.forEach((element,index)=>{
      classes[index] = "AP " + element.substring(0,element.indexOf("B")+1)
    })
    
    var grades = $('span').text().split("Grade(")
    grades.splice(0,1);
  
    grades.forEach((element,index)=>{
      grades[index] = element.substring(0,element.indexOf("%"))
    })
    
    return {classes: classes, grades: grades};
  }
  
  
  
  const Grade =  
  `<html lang="en" xmlns="http://www.w3.org/1999/xhtml" class="k-webkit k-webkit89"><head><title>
          Aeries Student Dashboard
      </title><meta id="ctl00_viewport" name="viewport" content="initial-scale=1"><link rel="shortcut icon" href="favicon.ico" type="image/x-icon"><link rel="icon" href="favicon.ico" type="image/x-icon"><link href="/Content/AjaxControlToolkit/Styles/Bundle?v=nap9lZtcl5K2gETjyyPCBXbWNbj8GlEheXK38ePUqDw1" rel="stylesheet">
      <link rel="stylesheet" type="text/css" href="StyleSheets/aeries.common.min.css?v=20160413"><link rel="stylesheet" type="text/css" href="StyleSheets/aeries.default.min.css?v=20160413"><link id="ctl00_BaseCSS" rel="stylesheet" type="text/css" href="StyleSheets/AeriesWeb.css"><link rel="stylesheet" type="text/css" href="StyleSheets/calendar-stylesheet.css"><link rel="stylesheet" type="text/css" href="KendoUI/kendo.common.min.css?v=2017.1.118"><link rel="stylesheet" type="text/css" href="KendoUI/kendo.rtl.min.css?v=2017.1.118"><link rel="stylesheet" type="text/css" href="KendoUI/kendo.bootstrap.min.css?v=2017.1.118">
          
          <!-- Bootstrap 4 -->
          <link rel="stylesheet" type="text/css" href="StyleSheets/bootstrap.min.css"><link rel="stylesheet" type="text/css" href="StyleSheets/bootstrap/bootstrap-tour.min.css?v=20170522"><link rel="stylesheet" type="text/css" href="KendoUI/kendo.dataviz.min.css?v=2017.1.118"><link rel="stylesheet" type="text/css" href="KendoUI/kendo.dataviz.default.min.css?v=2017.1.118"><link rel="stylesheet" type="text/css" href="StyleSheets/font-awesome/font-awesome.min.css"><link rel="stylesheet" type="text/css" href="StyleSheets/aeries-kendo-win.min.css"><link rel="stylesheet" type="text/css" href="StyleSheets/CheckBoxes.min.css?vsn=20150929"><link rel="stylesheet" type="text/css" href="StyleSheets/aeries-master.min.css?vsn=20160301">
  
          <script type="text/javascript" async="" defer="" src="https://stats.aeries.com/statistics/piwik.js"></script><script type="text/javascript" src="ClientScripts/ControlPositions.js?vsn=20190207"></script>
          <script type="text/javascript" src="ClientScripts/ExpandOut.js"></script>
          <script type="text/javascript" src="ClientScripts/XMLCommunications.js"></script>
          <script type="text/javascript" src="ClientScripts/xmldom.js"></script>
          
          <script type="text/javascript" src="ClientScripts/web-animations.js"></script>
          
          <script type="text/javascript" src="ClientScripts/muuri.js"></script>
          <script type="text/javascript" src="Scripts/require/TimeOut.js?vsn=20180509"></script>
  
          <script type="text/javascript" src="ClientScripts/calendar.js?vsn20141202"></script>
          
          <script type="text/javascript" src="ClientScripts/EmailStuff.js?vsn=20160428"></script>
          <script type="text/javascript" src="ClientScripts/jquery3.min.js?v=3.4.1"></script>
          <script type="text/javascript" src="ClientScripts/jquery-migrate.min.js"></script>
          <script type="text/javascript" src="ClientScripts/jquery.validate.min.js"></script>
          <script type="text/javascript" src="ClientScripts/jquery.validate.unobtrusive.min.js"></script>
          <script type="text/javascript" src="ClientScripts/jquery.unobtrusive-ajax.min.js"></script>
          <script type="text/javascript" src="KendoUI/kendo.all.min.js?v=2017.1.118"></script>
          <script type="text/javascript" src="KendoUI/kendo.aspnetmvc.min.js?v=2017.1.118"></script>
          <script type="text/javascript" src="Scripts/velocity.min.js"></script>
          <script type="text/javascript" src="ClientScripts/General.js?vsn=20200702"></script>
  
          <script type="text/javascript" src="ClientScripts/StudentBackpack.js?vsn=20161208"></script>
  
          <script type="text/javascript">window.defaultStatus="Welcome to Aeries";</script>
  
          <script type="text/javascript" src="ClientScripts/aeries-kendo-windows-1.0.4.js?vsn=20160401"></script>
          <script type="text/javascript" src="ClientScripts/UserOptions.js?vsn=20160504"></script>
          <script type="text/javascript" src="ClientScripts/aeries-pagination.js?vsn=20160309"></script>
  
          <!-- Bootstrap 4 -->
          <script type="text/javascript" src="ClientScripts/bootstrap.bundle.min.js"></script>
          <script type="text/javascript" src="ClientScripts/jquery.slimscroll.min.js"></script>
          <script type="text/javascript" src="Scripts/bootstrap-tour.min.js?v=20170522"></script>
          <script type="text/javascript" src="ClientScripts/Tours.js?v=20180227"></script>
  
          <script type="text/javascript" src="Tracking.vbhtml?637525303044483243"></script>
          <script type="text/javascript" src="ClientScripts/demo-feedback_js.js"></script>
          <link rel="stylesheet" type="text/css" href="ClientScripts/demo-feedback_css.css">
          <script type="text/javascript" src="Scripts/require/widgets/views/quicksearch/quicksearch.js"></script>
          <script type="text/javascript" src="ClientScripts/aeries-requiredfields.js?vsn=9.21.3.22"></script>
          <script type="text/javascript" src="ClientScripts/fuse.js"></script>
  
          <script type="text/javascript">
  
              $(document).ready(function () {
  
                  if (kendo.support.mobileOS) {
  
                      //GeneralFunctions.IsDemoServer(CheckForMobileVersion_IsDemoServer_Complete);
                  }
  
                  // Student Name Drop Down
                  $(document).on('click', '.student-full-name', function () {
                      if ($("#change-student-dd:hidden").length >= 1) {
                          $("#change-student").find(".icon-collapsed").removeClass('icon-collapsed').addClass('icon-expanded');
                          $("#change-student-dd").show();
                          // SlimScroll for student DD
                          $("#change-student-dd .namelist").slimScroll({
                              size: '8px',
                              color: '#C8C9C9',
                              opacity: "100%",
                              wheelStep: 10,
                              touchScrollStep: 75
                          });
                      } else {
                          $("#change-student").find(".icon-expanded").removeClass('icon-expanded').addClass('icon-collapsed');
                          $("#change-student-dd").hide();
                          $("#change-student-dd .namelist").slimScroll({ destroy: true });
                      }
                  });
  
                  // Close Student Name Drop Down if you click anywhere else
                  $(document).on('click', function (e) {
                      if ($(e.target).closest('#student-name-control').length <= 0 && $(e.target).closest('.slimScrollDiv').length <= 0) {
                          if ($("#change-student-dd").length > 0) {
                              $("#change-student").find(".icon-expanded").removeClass('icon-expanded').addClass('icon-collapsed');
                              $("#change-student-dd").hide();
                              $("#change-student-dd .namelist").slimScroll({ destroy: true });
                          }
                      }
                  });
  
                  // As you type Universal Search
                  var PreviousSearch = '';
                  try {
                      var randstr = 'R' + Math.round(Math.random() * 10000);
                      $('.AeriesFullPageSearchInput').attr('name', 'AeriesFullPageSearchInput' + randstr);
                  } catch (ex) {
                  }
                  
                  $(document).on('keyup', '.AeriesFullPageSearchInput', function (e) {
                      e.preventDefault();
                      var typedinvalue = $('.AeriesFullPageSearchInput').val().trim();
                      if (typedinvalue != PreviousSearch && typedinvalue.length >= 1) {
                          $("#SearchResultsOpen").hide();
                          $("#SearchResultsRecentlyViewed").hide();
                          PreviousSearch = typedinvalue;
                          UniversalSearch(typedinvalue);
                      } else if(typedinvalue.length == 0) {
                          $("#SearchResultsOpen").show();
                          $("#SearchResultsRecentlyViewed").show();
                          $("#SearchResultsContentStudents").hide();
                          $("#SearchResultsContentClasses").hide();
                          $("#SearchResultsContentContacts").hide();
                          $("#SearchResultsContentPages").hide();
                          $("#SearchResultsNoResults").hide();
                      }
                  }, 150);
  
                  $(document).on('focus', '.AeriesFullPageSearchInput', function (e) {
                      e.preventDefault();
                      OpenUniversalSearch();
                  });
                  $(document).on('click', '.blur, #AeriesFullPageBody', function (e) {
                      if ($('.blur:visible').length >= 1) {
                          e.preventDefault();
                          CloseUniversalSearch();
                      }				
                  });
                  $(document).on('focus', '.blur, #AeriesFullPageBody, #AeriesTextLogo', function (e) {
                      if ($('.blur:visible').length >= 1) {
                          e.preventDefault();
                          CloseUniversalSearch();
                      }				
                  });
  
                  // Open and close SubNav
                  $(document).on('click', '.AeriesFullPageParentNavMainLinkExpandable > a', function (e) {				
                      e.preventDefault();
                      var TopNav = $(this).closest('.AeriesFullPageParentNavMainLinkExpandable');
                      var SubNavID = TopNav.attr('id').replace("TOP_", "Sub_");
                      if ($('#' + SubNavID + ":visible").length <= 0) {
                          $('#' + SubNavID).show();					
                          TopNav.addClass('AeriesFullPageParentNavMainLinkExpanded');
                      } else {
                          $('#' + SubNavID).hide();
                          TopNav.removeClass('AeriesFullPageParentNavMainLinkExpanded');
                      }
                      
                      $('#AeriesFullPageNavItems').addClass('AeriesFullPageNavItemsShowSubMenu');
                  });
                  $(document).on('click', '.NavBack', function (e) {
                      e.preventDefault();
                      var SubNavID = $(this).closest('.AeriesFullPageParentNavSubLink').attr('id');
                      setTimeout(function () {
                          $('#' + SubNavID).hide();
                      }, 300);				
                      $('#AeriesFullPageNavItems').removeClass('AeriesFullPageNavItemsShowSubMenu');
                  });
  
                  PopulateSearch();
  
                  if ($('.CurrentPage').length >= 2) {
                      $('.CurrentPage').first().click();
                  }
              });
  
              var SearchPages = {};
  
              var RecentData = [{"Section":"Students","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a42+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347","Title":"Radin Ahmadizadeh","Details":"174130127^11^University High School","DTS":"\/Date(1616958702098)\/"},{"Section":"Classes","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a42+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=Widgets%2fClassSummary%2fRedirectToGradebook%3fGradebookNumber%3d7685082%26amp%3bTerm%3dS%26amp%3bCDS%3d30736500000000%26amp%3bSC%3d608","Title":"AP Chemistry B","Details":"174130127^^^710^F^32.6%^Bunch","DTS":"\/Date(1616958702963)\/"},{"Section":"Classes","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a42+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=Widgets%2fClassSummary%2fRedirectToGradebook%3fGradebookNumber%3d2102810%26amp%3bTerm%3dS%26amp%3bCDS%3d30736500000000%26amp%3bSC%3d608","Title":"AP Psychology B","Details":"174130127^^^1022^F^41.1%^Jo,Tiffany","DTS":"\/Date(1616958702963)\/"},{"Section":"Classes","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a42+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=Widgets%2fClassSummary%2fRedirectToGradebook%3fGradebookNumber%3d7739811%26amp%3bTerm%3dS%26amp%3bCDS%3d30736500000000%26amp%3bSC%3d608","Title":"AP Physics 1/2B","Details":"174130127^^^707^F^29.0%^Smay, T","DTS":"\/Date(1616958702963)\/"},{"Section":"Classes","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a42+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=Widgets%2fClassSummary%2fRedirectToGradebook%3fGradebookNumber%3d129263%26amp%3bTerm%3dS%26amp%3bCDS%3d30736500000000%26amp%3bSC%3d608","Title":"AP Calc BC B","Details":"174130127^^^GYM^F^58.8%^Davies","DTS":"\/Date(1616958702963)\/"},{"Section":"Classes","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a42+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=Widgets%2fClassSummary%2fRedirectToGradebook%3fGradebookNumber%3d1688416%26amp%3bTerm%3dS%26amp%3bCDS%3d30736500000000%26amp%3bSC%3d608","Title":"AP ComSciPrin B","Details":"174130127^^^509B^D-^61.3%^Kinney","DTS":"\/Date(1616958702963)\/"},{"Section":"Classes","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a42+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=Widgets%2fClassSummary%2fRedirectToGradebook%3fGradebookNumber%3d7447281%26amp%3bTerm%3dS%26amp%3bCDS%3d30736500000000%26amp%3bSC%3d608","Title":"AP Eng Lang B","Details":"174130127^^^218^F^55.5%^Kynor","DTS":"\/Date(1616958702963)\/"},{"Section":"Classes","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a42+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=Widgets%2fClassSummary%2fRedirectToGradebook%3fGradebookNumber%3d1790555%26amp%3bTerm%3dF%26amp%3bCDS%3d30736500000000%26amp%3bSC%3d608","Title":"","Details":"174130127^^^^D^66.2%^Bunch","DTS":"\/Date(1616958702963)\/"},{"Section":"Classes","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a42+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=Widgets%2fClassSummary%2fRedirectToGradebook%3fGradebookNumber%3d3784931%26amp%3bTerm%3dF%26amp%3bCDS%3d30736500000000%26amp%3bSC%3d608","Title":"","Details":"174130127^^^^B-^80.1%^Jo,Tiffany","DTS":"\/Date(1616958702963)\/"},{"Section":"Classes","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a42+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=Widgets%2fClassSummary%2fRedirectToGradebook%3fGradebookNumber%3d5214286%26amp%3bTerm%3dF%26amp%3bCDS%3d30736500000000%26amp%3bSC%3d608","Title":"","Details":"174130127^^^^C-^71.6%^Smay, T","DTS":"\/Date(1616958702963)\/"},{"Section":"Classes","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a42+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=Widgets%2fClassSummary%2fRedirectToGradebook%3fGradebookNumber%3d9212184%26amp%3bTerm%3dF%26amp%3bCDS%3d30736500000000%26amp%3bSC%3d608","Title":"","Details":"174130127^^^^D^62.9%^Kurdziel","DTS":"\/Date(1616958702963)\/"},{"Section":"Classes","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a42+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=Widgets%2fClassSummary%2fRedirectToGradebook%3fGradebookNumber%3d3432731%26amp%3bTerm%3dF%26amp%3bCDS%3d30736500000000%26amp%3bSC%3d608","Title":"","Details":"174130127^^^^A+^99.0%^Kinney","DTS":"\/Date(1616958702963)\/"},{"Section":"Classes","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a42+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=Widgets%2fClassSummary%2fRedirectToGradebook%3fGradebookNumber%3d9808390%26amp%3bTerm%3dF%26amp%3bCDS%3d30736500000000%26amp%3bSC%3d608","Title":"","Details":"174130127^^^^B-^80.0%^Kynor","DTS":"\/Date(1616958702963)\/"},{"Section":"Classes","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a42+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=GradebookDetails.aspx","Title":"Homeroom","Details":"174130127^^^707^^^Smay, T","DTS":"\/Date(1616958702963)\/"},{"Section":"RecentAssignments","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a43+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=GradebookDetails.aspx","Title":"13 Gas Laws Huge quiz MC","Details":"174130127^3/15/2021^3/16/2021^AP Chemistry B^Quizzes^15^75","DTS":"\/Date(1616958703667)\/"},{"Section":"RecentAssignments","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a43+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=GradebookDetails.aspx","Title":"9 Units 2, 9, \u0026 10 Test","Details":"174130127^3/25/2021^3/26/2021^AP CSP \u0026 App Dev^Graded Assessments^34^82.9","DTS":"\/Date(1616958703667)\/"},{"Section":"RecentAssignments","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a43+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=GradebookDetails.aspx","Title":"8 Innovation Simulation","Details":"174130127^2/22/2021^3/19/2021^AP CSP \u0026 App Dev^Graded Assessments^^0","DTS":"\/Date(1616958703667)\/"},{"Section":"RecentAssignments","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a43+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=GradebookDetails.aspx","Title":"50 Live Week 10","Details":"174130127^3/24/2021^3/25/2021^AP Calc BC B^Live Lesson^5^100","DTS":"\/Date(1616958703667)\/"},{"Section":"RecentAssignments","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a43+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=GradebookDetails.aspx","Title":"14 Ch. 11 Test","Details":"174130127^3/23/2021^3/24/2021^AP Psychology B^Exams/Quizzes/Writing^41^91.1","DTS":"\/Date(1616958703667)\/"},{"Section":"RecentAssignments","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a43+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=GradebookDetails.aspx","Title":"30 CH 9 BW WS #4","Details":"174130127^3/25/2021^3/26/2021^AP Physics 1/2B^Homework^0^0","DTS":"\/Date(1616958703667)\/"},{"Section":"RecentAssignments","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a43+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=GradebookDetails.aspx","Title":"18 Liquids/Solids/Solutions Quiz","Details":"174130127^3/24/2021^3/25/2021^AP Chemistry B^Quizzes^28^56","DTS":"\/Date(1616958703667)\/"},{"Section":"RecentAssignments","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a43+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=GradebookDetails.aspx","Title":"12 Ch 11 Questions","Details":"174130127^3/22/2021^3/23/2021^AP Psychology B^Homework/Classwork/Projects^^0","DTS":"\/Date(1616958703667)\/"},{"Section":"RecentAssignments","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a43+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=GradebookDetails.aspx","Title":"28 CH 9 BW WS #3","Details":"174130127^3/23/2021^3/24/2021^AP Physics 1/2B^Homework^0^0","DTS":"\/Date(1616958703667)\/"},{"Section":"RecentAssignments","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a43+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=GradebookDetails.aspx","Title":"13 Ch. 11 FRQ Homework","Details":"174130127^3/22/2021^3/23/2021^AP Psychology B^Homework/Classwork/Projects^^0","DTS":"\/Date(1616958703667)\/"},{"Section":"RecentAssignments","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a43+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=GradebookDetails.aspx","Title":"48 Live Week 9","Details":"174130127^3/18/2021^3/19/2021^AP Calc BC B^Live Lesson^5^100","DTS":"\/Date(1616958703667)\/"},{"Section":"RecentAssignments","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a43+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=GradebookDetails.aspx","Title":"49 Independent Week 9","Details":"174130127^3/22/2021^3/23/2021^AP Calc BC B^Independent Lesson^^0","DTS":"\/Date(1616958703667)\/"},{"Section":"RecentAssignments","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a43+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=GradebookDetails.aspx","Title":"27 CH 9 BW WS #2","Details":"174130127^3/22/2021^3/23/2021^AP Physics 1/2B^Homework^0^0","DTS":"\/Date(1616958703667)\/"},{"Section":"Contacts","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a43+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=EmergencyContacts.aspx%3fSQ%3d1","Title":"Jila Hatam Khani","Details":"174130127^1^9498009392^jiliahatam99@gmail.com^Mother","DTS":"\/Date(1603340394587)\/"},{"Section":"Contacts","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a43+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=EmergencyContacts.aspx%3fSQ%3d2","Title":"Hamid Ahmadizadeh","Details":"174130127^2^2064377612^ahhamid132@gmail.com^Father","DTS":"\/Date(1603340394587)\/"},{"Section":"Contacts","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a43+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=EmergencyContacts.aspx%3fSQ%3d3","Title":"ABC Children\u0027s Clinic","Details":"174130127^3^9493801234^^Physician","DTS":"\/Date(1603340079440)\/"},{"Section":"Contacts","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a43+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=EmergencyContacts.aspx%3fSQ%3d4","Title":"Paymon Rokni","Details":"174130127^4^9492900423^^Emergency Contact","DTS":"\/Date(1603340079440)\/"},{"Section":"Contacts","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a43+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=EmergencyContacts.aspx%3fSQ%3d5","Title":"Manijeh Tayari","Details":"174130127^5^9495105762^^Emergency Contact","DTS":"\/Date(1603340079440)\/"},{"Section":"Contacts","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a43+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=EmergencyContacts.aspx%3fSQ%3d6","Title":"Armelle Facredine","Details":"174130127^6^^^Emergency Contact","DTS":"\/Date(1603340079440)\/"},{"Section":"RecentlyViewed","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a44+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=Dashboard.aspx","Title":"Aeries Student Dashboard","Details":"Dashboard.aspx","DTS":"\/Date(1616888460000)\/"},{"Section":"RecentlyViewed","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a44+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=Grades.aspx","Title":"Grades","Details":"Grades.aspx","DTS":"\/Date(1614915000000)\/"},{"Section":"RecentlyViewed","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a44+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=Transcripts.aspx","Title":"Transcripts History","Details":"Transcripts.aspx","DTS":"\/Date(1614914880000)\/"},{"Section":"RecentlyViewed","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a44+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=ChangePassword.aspx","Title":"Change Aeries Password","Details":"ChangePassword.aspx","DTS":"\/Date(1610251680000)\/"},{"Section":"RecentlyViewed","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a44+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=GradebookSummary.aspx","Title":"Gradebook","Details":"GradebookSummary.aspx","DTS":"\/Date(1610251200000)\/"},{"Section":"RecentlyViewed","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a44+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=GradebookDetails.aspx","Title":"Gradebook Details","Details":"GradebookDetails.aspx","DTS":"\/Date(1610251140000)\/"},{"Section":"RecentlyViewed","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a44+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=StudentCourseRequest.aspx","Title":"Course Requests Entry","Details":"StudentCourseRequest.aspx","DTS":"\/Date(1609856760000)\/"},{"Section":"RecentlyViewed","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a44+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=ClassScheduling.aspx","Title":"Course Requests","Details":"ClassScheduling.aspx","DTS":"\/Date(1609856760000)\/"},{"Section":"RecentlyViewed","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a44+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=StudentReportCardHistory.aspx","Title":"Report Card History","Details":"StudentReportCardHistory.aspx","DTS":"\/Date(1609769460000)\/"},{"Section":"RecentlyViewed","STUSC":"608","STUSN":"26347","PageURL":"ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a44+AM\u0026SC=608\u0026SN=26347\u0026name=608_26347\u0026id=608_26347\u0026ReturnPage=Classes.aspx","Title":"Classes","Details":"Classes.aspx","DTS":"\/Date(1600450860000)\/"}];
  
              function PopulateSearch() {
  
                  var pagetext = '';
                  $('#AeriesFullPageNavItems a').each(function () {
                      var thishref = $(this).attr('href');
                      var metadata = '';
                      if ($(this).find('span').length >= 1) {
                          metadata = $(this).find('span').html();
                      }
                      if (typeof thishref !== typeof undefined && thishref !== false && thishref.indexOf('void(0)') == -1) {
                          if (pagetext.length >= 1) {
                              pagetext = pagetext + ", "
                          }
                          pagetext = pagetext + '{"pagetitle": "' + $(this).clone().children().remove().end().text() + '", "metadata": "' + metadata + '", "href":"' + thishref + '" }';
                      }
                  });
  
                  if (pagetext.length >= 1) {
                      pagetext = '[ ' + pagetext + ' ]';
                      SearchPages = JSON.parse(pagetext);
                  }
                  
              }
  
              function OpenUniversalSearch() {
                  $('#SearchResults').show();
                  var typedinvalue = $('.AeriesFullPageSearchInput').val().trim();
                  if (typedinvalue.length == 0) {
                      $("#SearchResultsOpen").show();
                      var RecentlyViewedHtml = "";
                      if ($("#SearchResultsRecentlyViewed .results").text().length <= 0) {
                          var RecentItem = 0;
                          jQuery.each(RecentData, function () {
                              if (this.Section == "RecentlyViewed") {
                                  if (RecentItem <= 20) {
                                      var resultdetails = this.Details;
                                      var resultclass = "result" + this.Section;
                                      var resultprefix = "";					
                                      resultdetails = GetStudentName(this.STUSC, this.STUSN);
                                      resultdetails = resultdetails + FormatRelativeDateTime(this.DTS);
                                      resultdetails = resultdetails + " " + this.Details
                                      RecentlyViewedHtml = RecentlyViewedHtml + "<a class='result " + resultclass + "' href='" + this.PageURL + "' title='" + this.Title + "'>" + resultprefix + "<div class='resultTitle'>" + this.Title + "</div><div class='resultdetails'>" + resultdetails + "</div></a>";							
                                  }							
                                  RecentItem++;
                              }
                          });
  
                          if (RecentlyViewedHtml.length == 0) {
                              RecentlyViewedHtml = 'Your recently viewed pages will appear here.';
                          }
  
                          $("#SearchResultsRecentlyViewed").show();
                          $('#SearchResultsRecentlyViewed .results').html(RecentlyViewedHtml);
                          
                      }
                  }			
                  $('#AeriesFullPageContent').addClass('blur');
              }
  
              function CloseUniversalSearch() {
                  $('#SearchResults').hide();
                  $('.blur').removeClass('blur');	
              }
  
              function GetStudentName(SC, SN) {
  
                  var FoundStudentName = '';
                  try {
                      jQuery.each(RecentData, function () {
                          if (this.Section == "Students" && SC == this.STUSC && SN == this.STUSN) {
                                  FoundStudentName = this.Title;
                          }
                      });
                  } catch (ex) {
                      console.log('error getting Student Name');
                  }
                  
                  return FoundStudentName;
  
              }
  
              function UniversalSearch(SearchValue) {			
  
                  var foundResults = 0;
                  var foundPageResults = 0;
                  var foundStudentResults = 0;			
                  var foundClassResults = 0;
                  var foundContactResults = 0;
  
                  // Look for Student Related Data			
                  var RecentDataOptions = {
                  shouldSort: true,
                  threshold: 0.3,
                  location: 0,
                  distance: 100,
                  maxPatternLength: 32,
                  minMatchCharLength: 1,
                  keys: [
                      "Title",
                      "Details",
                      "DTS"
                  ]
                  };
                  
                  var RecentDataFuse = new Fuse(RecentData, RecentDataOptions);
                  var RecentDataResult = RecentDataFuse.search(SearchValue);
  
                  var StudentsHtml = "";
                  var ClassesHtml = "";
                  var ContactsHtml = "";
                  if (RecentDataResult.length >= 1) {
                      jQuery.each(RecentDataResult, function () {
                          var resultdetails = this.Details;
                          var resultdetailsArray = this.Details.split("^");
                          var resultclass = "result" + this.Section;
  
                          var resultprefix = "";
                          try {
                              if (this.Section == "Students") {
                                  resultprefix = '<div class="resultStudentProfileImage"><img src="StuPic.ashx?ID=' + resultdetails.split("^")[0] + '&SC=' + this.STUSC + '&SZ=XL" alt="Student Photo" title="Student Photo"></div>';
                                  foundStudentResults++;
                                  StudentsHtml = StudentsHtml + "<a href='" + this.PageURL + "' class='result " + resultclass + "' title='" + this.Title + "'>" + resultprefix + "<div class='resultTitle'>" + this.Title + "</div><div class='resultdetails'>" + resultdetailsArray[2] + " <span title='Grade'>Grade " + resultdetailsArray[1]  + "</span></div></a>";
                              } else if (this.Section == "Contacts") {
                                  // ID, SQ, TL, EM, AT
                                  resultdetails = GetStudentName(this.STUSC, this.STUSN);
                                  resultdetails = resultdetails+ " <span class='relationship' title='Relationship'>" + resultdetailsArray[4] + "</span> " + FormatPhoneNumber(resultdetailsArray[2]) + " " + resultdetailsArray[3];
                                  foundContactResults++;
                                  ContactsHtml = ContactsHtml + "<a class='result " + resultclass + "' href='" + this.PageURL + "' title='" + this.Title + "'>" + resultprefix + "<div class='resultTitle'>" + this.Title + "</div><div class='resultdetails'>" + resultdetails +"</div></a>";
                              } else if (this.Section != "RecentlyViewed") {
                                  // ID, GradebookName, GradebookNumber, classroomVM.RoomNumber, classroomVM.CurrentMark, classroomVM.CurrentPercentOrAverage, classroomVM.TeacherName						
                                  resultdetails = GetStudentName(this.STUSC, this.STUSN);
                                  if (this.Title.length <= 0) {
                                      this.Title = resultdetailsArray[6];
                                      this.PageURL = 'GradebookDetails.aspx';
                                  } else {
                                      resultdetails = resultdetails + " <span title='Teacher'>" + resultdetailsArray[6] + "</span>";
                                  }
                                  resultdetails = resultdetails + " " + resultdetailsArray[3] + " " + resultdetailsArray[5];
                                  if (resultdetailsArray.length >= 5 && resultdetailsArray[4].length >= 1) {
                                      resultdetails = resultdetails + "  (" + resultdetailsArray[4] + ")";
                                  }
                                  foundClassResults++;
                                  ClassesHtml = ClassesHtml + "<a class='result " + resultclass + "' href='" + this.PageURL + "' title='" + this.Title + "'>" + resultprefix + "<div class='resultTitle'>" + this.Title + "</div><div class='resultdetails'>" + resultdetails +"</div></a>";
                              }
                              foundResults++;
                          } catch (ex) {
  
                          }					
                      });
                  }
  
                  $('#SearchResultsContentStudents .results').html(StudentsHtml);
                  $('#SearchResultsContentClasses .results').html(ClassesHtml);
                  $('#SearchResultsContentContacts .results').html(ContactsHtml);
  
                  if (foundStudentResults >= 1) {
                      $("#SearchResultsContentStudents").show();				
                  } else {
                      $("#SearchResultsContentStudents").hide();
                  }
                  if (foundClassResults >= 1) {
                      $("#SearchResultsContentClasses").show();				
                  } else {
                      $("#SearchResultsContentClasses").hide();
                  }
                  if (foundContactResults >= 1) {
                      $("#SearchResultsContentContacts").show();				
                  } else {
                      $("#SearchResultsContentContacts").hide();
                  }
  
                  // Look for pages
                  var pageoptions = {
                  shouldSort: true,
                  threshold: 0.3,
                  location: 0,
                  distance: 100,
                  maxPatternLength: 32,
                  minMatchCharLength: 1,
                  keys: [
                      "pagetitle",
                      "metadata",
                      "href"
                  ]
                  };
                  var fuse = new Fuse(SearchPages, pageoptions); // "list" is the item array
                  var result = fuse.search(SearchValue);
  
                  var linkresults = "";
                  if (result.length >= 1) {
                      $('#SearchResultsContentPages .results').html('');
                      jQuery.each(result, function () {
                          if (this.href.length >= 2) {
                              linkresults = linkresults + "<a class='result' href='" + this.href + "' title='" + this.metadata + "'><div class='resultTitle'>" + this.pagetitle + "</div><div class='resultdetails'>" + this.href +"</div></a>";
                              foundResults++;
                              foundPageResults++;
                          }					
                      });
                      $("#SearchResultsContentPages").show();				
                  } else {
                      $("#SearchResultsContentPages").hide();
                  }
                  $('#SearchResultsContentPages .results').html(linkresults);
  
                  // Look for StudentInfo
                  if (foundResults >= 1) {
                      $("#SearchResultsNoResults").hide();
                  } else {
                      $("#SearchResultsNoResults").show();
                  }
              }
  
              function ClearSearch(e) {
                  e.preventDefault();
                  $("#AeriesFullPageSearchInput").val("");
                  $("#AeriesFullPageSearchInput").trigger('keyup');
                  $("#SearchResultsOpen").show();
                  $("#SearchResultsRecentlyViewed").show();
              }
  
          </script>
  
      <style type="text/css">
          .SSAstyle {
              border-style:solid none solid none;
          }
  
          .smallmenu i.fa {
              font-size:12pt;
              padding-left:3px;
          }
  
          .smallmenu i.fa:hover {
              color: gray;
          }
      </style>
  
          </head>
  
      <body id="ctl00_AeriesFullPageParent" class="AeriesFullPageParent" data-new-gr-c-s-check-loaded="14.1001.0" data-gr-ext-installed="">
  
          <a href="#AeriesFullPageContent" class="skip">Skip to content</a>
      
      <form method="post" action="./Dashboard.aspx" id="aspnetForm" novalidate="novalidate">
      <div class="aspNetHidden">
      <input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="">
      <input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="">
      <input type="hidden" name="__LASTFOCUS" id="__LASTFOCUS" value="">
      <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="/wEPDwULLTE5OTcwNTg3ODEPFgQeD0hpZGVDb250YWN0SW5mb2geE1ZhbGlkYXRlUmVxdWVzdE1vZGUCARYCZg9kFgICAw9kFgJmD2QWDgIBD2QWAgIDDw8WAh4EVGV4dAUWamlsaWFoYXRhbTk5QGdtYWlsLmNvbWRkAgIPZBYCAgEPZBYCZg8WAh4JaW5uZXJodG1sBaA2PGRpdiBpZD0nVE9QXzEnIGNsYXNzPSdBZXJpZXNGdWxsUGFnZVBhcmVudE5hdk1haW5MaW5rIE5hdkRhc2hib2FyZCc+IA0KIDxhIGNsYXNzPSIiIGhyZWY9IkRlZmF1bHQuYXNweCIgb25jbGljaz0icmV0dXJuIHRydWU7IiAgbmFtZT0iRGFzaGJvYXJkIiBhcmlhLWV4cGFuZGVkPSJmYWxzZSIgaWQ9Ik5hdk1haW5EYXNoYm9hcmQiIHRhcmdldD0iIiBhcmlhLWhhc3BvcHVwPSJ0cnVlIj5EYXNoYm9hcmQ8L2E+IA0KIDwvZGl2PiANCiA8ZGl2IGlkPSdUT1BfMicgY2xhc3M9J0Flcmllc0Z1bGxQYWdlUGFyZW50TmF2TWFpbkxpbmsgTmF2U3R1ZGVudEluZm8gQWVyaWVzRnVsbFBhZ2VQYXJlbnROYXZNYWluTGlua0V4cGFuZGFibGUnPiANCiA8YSBjbGFzcz0iIiBocmVmPSJqYXZhc2NyaXB0OnZvaWQoMCk7IiBvbmNsaWNrPSJyZXR1cm4gdHJ1ZTsiICBuYW1lPSJTdHVkZW50IEluZm8iIGFyaWEtZXhwYW5kZWQ9ImZhbHNlIiBpZD0iTmF2TWFpblN0dWRlbnQgSW5mbyIgdGFyZ2V0PSIiIGFyaWEtaGFzcG9wdXA9InRydWUiPlN0dWRlbnQgSW5mbzwvYT4gDQogPGRpdiBpZD0nU3ViXzInIGNsYXNzPSdBZXJpZXNGdWxsUGFnZVBhcmVudE5hdlN1YkxpbmsnPjxkaXYgY2xhc3M9J0Flcmllc0Z1bGxQYWdlUGFyZW50TmF2U3ViTGlua01lbnUnPjxhIGNsYXNzPSdOYXZCYWNrIG5vcm1hbG1vZGUnIGhyZWY9JyMnIGFyaWEtZXhwYW5kZWQ9J3RydWUnIHRpdGxlPSdDbGljayB0byBnbyBiYWNrIHRvIHRoZSBtYWluIE5hdic+U3R1ZGVudCBJbmZvPC9hPiANCiA8YSBjbGFzcz0iIiBocmVmPSJTdHVkZW50UHJvZmlsZS5hc3B4IiBuYW1lPSJQcm9maWxlIiBhcmlhLWV4cGFuZGVkPSJ0cnVlIiBpZD0iTmF2U3ViUHJvZmlsZSI+UHJvZmlsZTwvYT4gDQogPGEgY2xhc3M9IiIgaHJlZj0iU3R1ZGVudHMuYXNweCIgbmFtZT0iRGVtb2dyYXBoaWNzIiBhcmlhLWV4cGFuZGVkPSJ0cnVlIiBpZD0iTmF2U3ViRGVtb2dyYXBoaWNzIj5EZW1vZ3JhcGhpY3M8L2E+IA0KIDxhIGNsYXNzPSIiIGhyZWY9IkVtZXJnZW5jeUNvbnRhY3RzLmFzcHgiIG5hbWU9IkNvbnRhY3RzIiBhcmlhLWV4cGFuZGVkPSJ0cnVlIiBpZD0iTmF2U3ViQ29udGFjdHMiPkNvbnRhY3RzPC9hPiANCiA8YSBjbGFzcz0iIiBocmVmPSJQYXJlbnREYXRhQ29uZmlybWF0aW9uLmFzcHgiIG5hbWU9IkRhdGEgQ29uZmlybWF0aW9uIiBhcmlhLWV4cGFuZGVkPSJ0cnVlIiBpZD0iTmF2U3ViRGF0YSBDb25maXJtYXRpb24iPkRhdGEgQ29uZmlybWF0aW9uPC9hPiANCiA8YSBjbGFzcz0iIiBocmVmPSJGZWVzLmFzcHgiIG5hbWU9IkZlZXMgYW5kIEZpbmVzIiBhcmlhLWV4cGFuZGVkPSJ0cnVlIiBpZD0iTmF2U3ViRmVlcyBhbmQgRmluZXMiPkZlZXMgYW5kIEZpbmVzPC9hPiANCiA8YSBjbGFzcz0iIiBocmVmPSJVc2VyRGVmaW5lZFN0dWRlbnREYXRhLmFzcHg/VEM9QkxDUiIgbmFtZT0iQmxlbmRlZCBMZWFybmluZyBDb3Vyc2UgUmVxdWVzdHMiIGFyaWEtZXhwYW5kZWQ9InRydWUiIGlkPSJOYXZTdWJCbGVuZGVkIExlYXJuaW5nIENvdXJzZSBSZXF1ZXN0cyI+QmxlbmRlZCBMZWFybmluZyBDb3Vyc2UgUmVxdWVzdHM8L2E+IA0KIDxhIGNsYXNzPSIiIGhyZWY9IlVzZXJEZWZpbmVkU3R1ZGVudERhdGEuYXNweD9UQz1DQVNTIiBuYW1lPSJDQUFTUFAgTG9naW4gQ2FyZHMiIGFyaWEtZXhwYW5kZWQ9InRydWUiIGlkPSJOYXZTdWJDQUFTUFAgTG9naW4gQ2FyZHMiPkNBQVNQUCBMb2dpbiBDYXJkczwvYT4gDQogPGEgY2xhc3M9IiIgaHJlZj0iVXNlckRlZmluZWRTdHVkZW50RGF0YS5hc3B4P1RDPU5DVkMiIG5hbWU9IlJlcG9ydCBQb3NzaWJsZS9Db25maXJtZWQgQ09WSUQgQ2FzZSIgYXJpYS1leHBhbmRlZD0idHJ1ZSIgaWQ9Ik5hdlN1YlJlcG9ydCBQb3NzaWJsZS9Db25maXJtZWQgQ09WSUQgQ2FzZSI+UmVwb3J0IFBvc3NpYmxlL0NvbmZpcm1lZCBDT1ZJRCBDYXNlPC9hPiANCiA8L2Rpdj48L2Rpdj4gDQogPC9kaXY+IA0KIDxkaXYgaWQ9J1RPUF8zJyBjbGFzcz0nQWVyaWVzRnVsbFBhZ2VQYXJlbnROYXZNYWluTGluayBOYXZBdHRlbmRhbmNlIEFlcmllc0Z1bGxQYWdlUGFyZW50TmF2TWFpbkxpbmtFeHBhbmRhYmxlJz4gDQogPGEgY2xhc3M9IiIgaHJlZj0iamF2YXNjcmlwdDp2b2lkKDApOyIgb25jbGljaz0icmV0dXJuIHRydWU7IiAgbmFtZT0iQXR0ZW5kYW5jZSIgYXJpYS1leHBhbmRlZD0iZmFsc2UiIGlkPSJOYXZNYWluQXR0ZW5kYW5jZSIgdGFyZ2V0PSIiIGFyaWEtaGFzcG9wdXA9InRydWUiPkF0dGVuZGFuY2U8L2E+IA0KIDxkaXYgaWQ9J1N1Yl8zJyBjbGFzcz0nQWVyaWVzRnVsbFBhZ2VQYXJlbnROYXZTdWJMaW5rJz48ZGl2IGNsYXNzPSdBZXJpZXNGdWxsUGFnZVBhcmVudE5hdlN1YkxpbmtNZW51Jz48YSBjbGFzcz0nTmF2QmFjayBub3JtYWxtb2RlJyBocmVmPScjJyBhcmlhLWV4cGFuZGVkPSd0cnVlJyB0aXRsZT0nQ2xpY2sgdG8gZ28gYmFjayB0byB0aGUgbWFpbiBOYXYnPkF0dGVuZGFuY2U8L2E+IA0KIDxhIGNsYXNzPSIiIGhyZWY9IkF0dGVuZGFuY2UuYXNweCIgbmFtZT0iQXR0ZW5kYW5jZSIgYXJpYS1leHBhbmRlZD0idHJ1ZSIgaWQ9Ik5hdlN1YkF0dGVuZGFuY2UiPkF0dGVuZGFuY2U8L2E+IA0KIDwvZGl2PjwvZGl2PiANCiA8L2Rpdj4gDQogPGRpdiBpZD0nVE9QXzQnIGNsYXNzPSdBZXJpZXNGdWxsUGFnZVBhcmVudE5hdk1haW5MaW5rIE5hdkdyYWRlcyBBZXJpZXNGdWxsUGFnZVBhcmVudE5hdk1haW5MaW5rRXhwYW5kYWJsZSc+IA0KIDxhIGNsYXNzPSIiIGhyZWY9ImphdmFzY3JpcHQ6dm9pZCgwKTsiIG9uY2xpY2s9InJldHVybiB0cnVlOyIgIG5hbWU9IkdyYWRlcyIgYXJpYS1leHBhbmRlZD0iZmFsc2UiIGlkPSJOYXZNYWluR3JhZGVzIiB0YXJnZXQ9IiIgYXJpYS1oYXNwb3B1cD0idHJ1ZSI+R3JhZGVzPC9hPiANCiA8ZGl2IGlkPSdTdWJfNCcgY2xhc3M9J0Flcmllc0Z1bGxQYWdlUGFyZW50TmF2U3ViTGluayc+PGRpdiBjbGFzcz0nQWVyaWVzRnVsbFBhZ2VQYXJlbnROYXZTdWJMaW5rTWVudSc+PGEgY2xhc3M9J05hdkJhY2sgbm9ybWFsbW9kZScgaHJlZj0nIycgYXJpYS1leHBhbmRlZD0ndHJ1ZScgdGl0bGU9J0NsaWNrIHRvIGdvIGJhY2sgdG8gdGhlIG1haW4gTmF2Jz5HcmFkZXM8L2E+IA0KIDxhIGNsYXNzPSIiIGhyZWY9IkdyYWRlYm9va1N1bW1hcnkuYXNweCIgbmFtZT0iR3JhZGVib29rIiBhcmlhLWV4cGFuZGVkPSJ0cnVlIiBpZD0iTmF2U3ViR3JhZGVib29rIj5HcmFkZWJvb2s8L2E+IA0KIDxhIGNsYXNzPSIiIGhyZWY9IkdyYWRlYm9va0RldGFpbHMuYXNweCIgbmFtZT0iR3JhZGVib29rIERldGFpbHMiIGFyaWEtZXhwYW5kZWQ9InRydWUiIGlkPSJOYXZTdWJHcmFkZWJvb2sgRGV0YWlscyI+R3JhZGVib29rIERldGFpbHM8L2E+IA0KIDxhIGNsYXNzPSIiIGhyZWY9IlN0dWRlbnRSZXBvcnRDYXJkSGlzdG9yeS5hc3B4IiBuYW1lPSJSZXBvcnQgQ2FyZCBIaXN0b3J5IiBhcmlhLWV4cGFuZGVkPSJ0cnVlIiBpZD0iTmF2U3ViUmVwb3J0IENhcmQgSGlzdG9yeSI+UmVwb3J0IENhcmQgSGlzdG9yeTwvYT4gDQogPGEgY2xhc3M9IiIgaHJlZj0iR3JhZHVhdGlvblJlcXVpcmVtZW50cy5hc3B4IiBuYW1lPSJHcmFkdWF0aW9uIFN0YXR1cyIgYXJpYS1leHBhbmRlZD0idHJ1ZSIgaWQ9Ik5hdlN1YkdyYWR1YXRpb24gU3RhdHVzIj5HcmFkdWF0aW9uIFN0YXR1czwvYT4gDQogPGEgY2xhc3M9IiIgaHJlZj0iVHJhbnNjcmlwdHMuYXNweCIgbmFtZT0iVHJhbnNjcmlwdHMgPHNwYW4gY2xhc3M9J21ldGFkYXRhJyBzdHlsZT0nZGlzcGxheTogbm9uZTsnPkhpc3Rvcnk8L3NwYW4+IiBhcmlhLWV4cGFuZGVkPSJ0cnVlIiBpZD0iTmF2U3ViVHJhbnNjcmlwdHMgPHNwYW4gY2xhc3M9J21ldGFkYXRhJyBzdHlsZT0nZGlzcGxheTogbm9uZTsnPkhpc3Rvcnk8L3NwYW4+Ij5UcmFuc2NyaXB0cyA8c3BhbiBjbGFzcz0nbWV0YWRhdGEnIHN0eWxlPSdkaXNwbGF5OiBub25lOyc+SGlzdG9yeTwvc3Bhbj48L2E+IA0KIDxhIGNsYXNzPSIiIGhyZWY9IlN0dWRlbnRTdGFuZGFyZHNCYXNlZFByb2dyZXNzLmFzcHgiIG5hbWU9IlN0YW5kYXJkcyBCYXNlZCBQcm9ncmVzcyBEYXNoYm9hcmQiIGFyaWEtZXhwYW5kZWQ9InRydWUiIGlkPSJOYXZTdWJTdGFuZGFyZHMgQmFzZWQgUHJvZ3Jlc3MgRGFzaGJvYXJkIj5TdGFuZGFyZHMgQmFzZWQgUHJvZ3Jlc3MgRGFzaGJvYXJkPC9hPiANCiA8L2Rpdj48L2Rpdj4gDQogPC9kaXY+IA0KIDxkaXYgaWQ9J1RPUF81JyBjbGFzcz0nQWVyaWVzRnVsbFBhZ2VQYXJlbnROYXZNYWluTGluayBOYXZDbGFzc2VzIEFlcmllc0Z1bGxQYWdlUGFyZW50TmF2TWFpbkxpbmtFeHBhbmRhYmxlJz4gDQogPGEgY2xhc3M9IiIgaHJlZj0iamF2YXNjcmlwdDp2b2lkKDApOyIgb25jbGljaz0icmV0dXJuIHRydWU7IiAgbmFtZT0iQ2xhc3NlcyIgYXJpYS1leHBhbmRlZD0iZmFsc2UiIGlkPSJOYXZNYWluQ2xhc3NlcyIgdGFyZ2V0PSIiIGFyaWEtaGFzcG9wdXA9InRydWUiPkNsYXNzZXM8L2E+IA0KIDxkaXYgaWQ9J1N1Yl81JyBjbGFzcz0nQWVyaWVzRnVsbFBhZ2VQYXJlbnROYXZTdWJMaW5rJz48ZGl2IGNsYXNzPSdBZXJpZXNGdWxsUGFnZVBhcmVudE5hdlN1YkxpbmtNZW51Jz48YSBjbGFzcz0nTmF2QmFjayBub3JtYWxtb2RlJyBocmVmPScjJyBhcmlhLWV4cGFuZGVkPSd0cnVlJyB0aXRsZT0nQ2xpY2sgdG8gZ28gYmFjayB0byB0aGUgbWFpbiBOYXYnPkNsYXNzZXM8L2E+IA0KIDxhIGNsYXNzPSIiIGhyZWY9IkNsYXNzZXMuYXNweCIgbmFtZT0iQ2xhc3NlcyIgYXJpYS1leHBhbmRlZD0idHJ1ZSIgaWQ9Ik5hdlN1YkNsYXNzZXMiPkNsYXNzZXM8L2E+IA0KIDwvZGl2PjwvZGl2PiANCiA8L2Rpdj4gDQogPGRpdiBpZD0nVE9QXzYnIGNsYXNzPSdBZXJpZXNGdWxsUGFnZVBhcmVudE5hdk1haW5MaW5rIE5hdk1lZGljYWwgQWVyaWVzRnVsbFBhZ2VQYXJlbnROYXZNYWluTGlua0V4cGFuZGFibGUnPiANCiA8YSBjbGFzcz0iIiBocmVmPSJqYXZhc2NyaXB0OnZvaWQoMCk7IiBvbmNsaWNrPSJyZXR1cm4gdHJ1ZTsiICBuYW1lPSJNZWRpY2FsIiBhcmlhLWV4cGFuZGVkPSJmYWxzZSIgaWQ9Ik5hdk1haW5NZWRpY2FsIiB0YXJnZXQ9IiIgYXJpYS1oYXNwb3B1cD0idHJ1ZSI+TWVkaWNhbDwvYT4gDQogPGRpdiBpZD0nU3ViXzYnIGNsYXNzPSdBZXJpZXNGdWxsUGFnZVBhcmVudE5hdlN1YkxpbmsnPjxkaXYgY2xhc3M9J0Flcmllc0Z1bGxQYWdlUGFyZW50TmF2U3ViTGlua01lbnUnPjxhIGNsYXNzPSdOYXZCYWNrIG5vcm1hbG1vZGUnIGhyZWY9JyMnIGFyaWEtZXhwYW5kZWQ9J3RydWUnIHRpdGxlPSdDbGljayB0byBnbyBiYWNrIHRvIHRoZSBtYWluIE5hdic+TWVkaWNhbDwvYT4gDQogPGEgY2xhc3M9IiIgaHJlZj0iSW1tdW5pemF0aW9ucy5hc3B4IiBuYW1lPSJJbW11bml6YXRpb25zIiBhcmlhLWV4cGFuZGVkPSJ0cnVlIiBpZD0iTmF2U3ViSW1tdW5pemF0aW9ucyI+SW1tdW5pemF0aW9uczwvYT4gDQogPC9kaXY+PC9kaXY+IA0KIDwvZGl2PiANCiA8ZGl2IGlkPSdUT1BfNycgY2xhc3M9J0Flcmllc0Z1bGxQYWdlUGFyZW50TmF2TWFpbkxpbmsgTmF2VGVzdFNjb3JlcyBBZXJpZXNGdWxsUGFnZVBhcmVudE5hdk1haW5MaW5rRXhwYW5kYWJsZSc+IA0KIDxhIGNsYXNzPSIiIGhyZWY9ImphdmFzY3JpcHQ6dm9pZCgwKTsiIG9uY2xpY2s9InJldHVybiB0cnVlOyIgIG5hbWU9IlRlc3QgU2NvcmVzIiBhcmlhLWV4cGFuZGVkPSJmYWxzZSIgaWQ9Ik5hdk1haW5UZXN0IFNjb3JlcyIgdGFyZ2V0PSIiIGFyaWEtaGFzcG9wdXA9InRydWUiPlRlc3QgU2NvcmVzPC9hPiANCiA8ZGl2IGlkPSdTdWJfNycgY2xhc3M9J0Flcmllc0Z1bGxQYWdlUGFyZW50TmF2U3ViTGluayc+PGRpdiBjbGFzcz0nQWVyaWVzRnVsbFBhZ2VQYXJlbnROYXZTdWJMaW5rTWVudSc+PGEgY2xhc3M9J05hdkJhY2sgbm9ybWFsbW9kZScgaHJlZj0nIycgYXJpYS1leHBhbmRlZD0ndHJ1ZScgdGl0bGU9J0NsaWNrIHRvIGdvIGJhY2sgdG8gdGhlIG1haW4gTmF2Jz5UZXN0IFNjb3JlczwvYT4gDQogPGEgY2xhc3M9IiIgaHJlZj0iVGVzdERldGFpbHMuYXNweCIgbmFtZT0iVGVzdCBEZXRhaWxzIiBhcmlhLWV4cGFuZGVkPSJ0cnVlIiBpZD0iTmF2U3ViVGVzdCBEZXRhaWxzIj5UZXN0IERldGFpbHM8L2E+IA0KIDxhIGNsYXNzPSIiIGhyZWY9IlN0YXRlVGVzdFNjb3Jlc1JlcG9ydHMuYXNweCIgbmFtZT0iU3RhdGUgVGVzdCBTY29yZXMgUmVwb3J0cyIgYXJpYS1leHBhbmRlZD0idHJ1ZSIgaWQ9Ik5hdlN1YlN0YXRlIFRlc3QgU2NvcmVzIFJlcG9ydHMiPlN0YXRlIFRlc3QgU2NvcmVzIFJlcG9ydHM8L2E+IA0KIDxhIGNsYXNzPSIiIGhyZWY9IlRlc3RTY29yZXMuYXNweCIgbmFtZT0iVGVzdCBTY29yZXMiIGFyaWEtZXhwYW5kZWQ9InRydWUiIGlkPSJOYXZTdWJUZXN0IFNjb3JlcyI+VGVzdCBTY29yZXM8L2E+IA0KIDxhIGNsYXNzPSIiIGhyZWY9IkNvbGxlZ2VUZXN0U2NvcmVzLmFzcHgiIG5hbWU9IkNvbGxlZ2UgRW50cmFuY2UgVGVzdHMiIGFyaWEtZXhwYW5kZWQ9InRydWUiIGlkPSJOYXZTdWJDb2xsZWdlIEVudHJhbmNlIFRlc3RzIj5Db2xsZWdlIEVudHJhbmNlIFRlc3RzPC9hPiANCiA8L2Rpdj48L2Rpdj4gDQogPC9kaXY+IA0KIDxkaXYgaWQ9J1RPUF85JyBjbGFzcz0nQWVyaWVzRnVsbFBhZ2VQYXJlbnROYXZNYWluTGluayBOYXZUaXRhbic+IA0KIDxhIGNsYXNzPSIiIGhyZWY9IkdvVG9UaXRhbi5hc3B4IiBvbmNsaWNrPSJyZXR1cm4gdHJ1ZTsiIG5hbWU9IlRpdGFuIiBhcmlhLWV4cGFuZGVkPSJmYWxzZSIgaWQ9Ik5hdk1haW5UaXRhbiIgdGFyZ2V0PSJfYmxhbmsiIGFyaWEtaGFzcG9wdXA9InRydWUiPjxpbWcgc3JjPSJpbWFnZXMvdGl0YW4ucG5nIiBzdHlsZT0iYm9yZGVyOiAwOyB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207IHBhZGRpbmctcmlnaHQ6IDJweDsiIC8+PHNwYW4+VGl0YW48L3NwYW4+PC9hPiANCiA8L2Rpdj5kAgUPFgIeB1Zpc2libGVoZAIGDxYCHwRoFgICAw8PFgIfAmVkZAIHD2QWCmYPD2QPEBYBZhYBFgIeDlBhcmFtZXRlclZhbHVlKClZU3lzdGVtLkludDY0LCBtc2NvcmxpYiwgVmVyc2lvbj00LjAuMC4wLCBDdWx0dXJlPW5ldXRyYWwsIFB1YmxpY0tleVRva2VuPWI3N2E1YzU2MTkzNGUwODkGMTM5MDA4DxYBAgcWAQV7QWVyaWVzLldlYi5DdXN0b21Db250cm9sLkFlcmllc1Nlc3Npb25TdGF0ZVZhbHVlUGFyYW1ldGVyLCBBZXJpZXNORVQsIFZlcnNpb249MS4wLjAuMCwgQ3VsdHVyZT1uZXV0cmFsLCBQdWJsaWNLZXlUb2tlbj1udWxsZGQCBQ8PFgIfAgUyV2VsY29tZSB0byB0aGUgQWVyaWVzIFBvcnRhbCBmb3IgUmFkaW4gQWhtYWRpemFkZWhkZAIGDxYCHwRnFhJmDxYCHwRoFgJmDw8WAh8EaGQWBGYPD2QPEBYCZgIBFgIWAh8FAuAEFgIfBWQPFgICBwIDFgEFfEFlcmllcy5XZWIuQ3VzdG9tQ29udHJvbC5BZXJpZXNTZXNzaW9uQ29udGV4dEluZm9QYXJhbWV0ZXIsIEFlcmllc05FVCwgVmVyc2lvbj0xLjAuMC4wLCBDdWx0dXJlPW5ldXRyYWwsIFB1YmxpY0tleVRva2VuPW51bGxkZAIBDzwrAAkBAA8WBB4IRGF0YUtleXMWAB4LXyFJdGVtQ291bnRmZGQCAQ9kFgJmD2QWAmYPFgIfBwIBFgJmD2QWCGYPFQEpU3R1UGljLmFzaHg/SUQ9MTc0MTMwMTI3JkJNPSZTQz02MDgmU1o9WExkAgEPFQMcMyUyZjI4JTJmMjAyMSs1JTNhMTElM2E0NCtBTQM2MDgFMjYzNDdkAgIPFQQDNjA4BTI2MzQ3AzYwOAUyNjM0N2QCAw8VChwzJTJmMjglMmYyMDIxKzUlM2ExMSUzYTQ0K0FNAzYwOAUyNjM0NwM2MDgFMjYzNDcDNjA4BTI2MzQ3EVJhZGluIEFobWFkaXphZGVoAjExFlVuaXZlcnNpdHkgSGlnaCBTY2hvb2xkAgYPFgIfBGcWAmYPZBYEAgEPD2QPEBYCZgIBFgIWAh8FKCsEBjEzOTAwOBYCHwVkDxYCAgcCAxYBBXtBZXJpZXMuV2ViLkN1c3RvbUNvbnRyb2wuQWVyaWVzU2Vzc2lvblN0YXRlVmFsdWVQYXJhbWV0ZXIsIEFlcmllc05FVCwgVmVyc2lvbj0xLjAuMC4wLCBDdWx0dXJlPW5ldXRyYWwsIFB1YmxpY0tleVRva2VuPW51bGxkZAIJD2QWBmYPDxYCHwIFDUFsZXJ0IE9wdGlvbnNkZAIBDw8WAh8CBUdBZGQgdGhyZXNob2xkcyB0byByZWNlaXZlIGFsZXJ0cyB3aGVuIGRhdGEgY2hhbmdlcyBmb3IgeW91ciBzdHVkZW50KHMpLmRkAgQPZBYEAgEPDxYCHwIFVVRoZSBmb2xsb3dpbmcgc3R1ZGVudHMgYXJlIGVucm9sbGVkIGluIGEgc2Nob29sIHdoZXJlIGFsZXJ0IHRocmVzaG9sZHMgYXJlIGF2YWlsYWJsZTpkZAIFDxQrAAJkZGQCCQ8WAh8EZxYCZg88KwAJAQAPFgYfBhYAHwcCCh8EZ2QWFAIBD2QWAmYPFQ0BQgpTY2hsIEJ1c2luATEAAAAAATEAAAAAATFkAgIPZBYCZg8VDQFDCkN1dC9UcnVhbnQBNQABNAEyATQBMQE0ATEAAABkAgMPZBYCZg8VDQFJB0lsbG5lc3MBMQAAATEAATEAATEAAABkAgQPZBYCZg8VDQFKCERMTm90RW5nATYAATEBMQEzATIBNAE2AAABNmQCBQ9kFgJmDxUNAU8IRExFbmdPdGgBMAAAAAAAAAExAAAAZAIGD2QWAmYPFQ0BUQpRdWFyYW50aW5lATMAATEBMgExATIBMQEyAAAAZAIHD2QWAmYPFQ0BWQhETEVuZ0NvbgEwAAExAAExAAExAAAAAGQCCA9kFgJmDxUNAApfKlRPVEFMUypfAAAAAAAAAAAAAABkAgkPZBYCZg8VDQAHRVhDVVNFRAE0ATABMQEzATEBMwExATMBMAEwATBkAgoPZBYCZg8VDQAJVU5FWENVU0VEAjExATABNQEzATcBMwE4ATcBMAEwATZkAgoPZBYCZg88KwAJAGQCDA9kFgJmD2QWBGYPD2QPEBYCZgIBFgIWAh8FAuAEFgIfBWQPFgICBwIDFgEFfEFlcmllcy5XZWIuQ3VzdG9tQ29udHJvbC5BZXJpZXNTZXNzaW9uQ29udGV4dEluZm9QYXJhbWV0ZXIsIEFlcmllc05FVCwgVmVyc2lvbj0xLjAuMC4wLCBDdWx0dXJlPW5ldXRyYWwsIFB1YmxpY0tleVRva2VuPW51bGxkZAICDxYCHwdmFgJmD2QWBGYPFQEJUmVzb3VyY2VzZAIBDxUCBFNpdGULRGVzY3JpcHRpb25kAg0PZBYCZg8PFgweBlRlc3RJRAUEU0JBQx4GVGVzdFRBBQZTUFJHMTgeBWlzQ3N0ZB4ZTGFzdENEU19SZWNlbnRUZXN0UmVzdWx0cwUOMzA3MzY1MDAwMDAwMDAeCkxhc3RUZXN0SWQFBUNFTERUHgVpc0NTVGdkFgICAQ9kFgJmD2QWAmYPZBYCZg9kFgICAQ8WAh8HAgsWFmYPZBYIAgMPZBYCZg9kFgJmDxUBHklydmluZSBVbmlmaWVkIFNjaG9vbCBEaXN0cmljdGQCBQ8WAh8EZ2QCBw8WAh8EZxYCZg9kFgRmDxUDGFRlc3REZXRhaWxzLmFzcHg/aWQ9U0JBQxNTZWUgYWxsIHRlc3Qgc2NvcmVzBFNCQUNkAgEPDxYCHwRnZGQCCA8VBAtNYXRoZW1hdGljcwcwNS8yMDE4ABFTdGFuZGFyZCBFeGNlZWRlZGQCAQ9kFggCAw9kFgJmD2QWAmYPFQEeSXJ2aW5lIFVuaWZpZWQgU2Nob29sIERpc3RyaWN0ZAIFDxYCHwRoZAIHDxYCHwRoFgJmD2QWAmYPFQMYVGVzdERldGFpbHMuYXNweD9pZD1TQkFDE1NlZSBhbGwgdGVzdCBzY29yZXMEU0JBQ2QCCA8VBBhFbmdsaXNoIExhbmcgQXJ0cyAvTGl0ZXIHMDUvMjAxOAARU3RhbmRhcmQgRXhjZWVkZWRkAgIPZBYIAgMPZBYCZg9kFgJmDxUBHklydmluZSBVbmlmaWVkIFNjaG9vbCBEaXN0cmljdGQCBQ8WAh8EaGQCBw8WAh8EZxYCZg9kFgJmDxUDF1Rlc3REZXRhaWxzLmFzcHg/aWQ9Q1NUE1NlZSBhbGwgdGVzdCBzY29yZXMDQ1NUZAIIDxUEB1NjaWVuY2UHMDYvMjAxNQAIQWR2YW5jZWRkAgMPZBYIAgMPZBYCZg9kFgJmDxUBHklydmluZSBVbmlmaWVkIFNjaG9vbCBEaXN0cmljdGQCBQ8WAh8EaGQCBw8WAh8EZxYCZg9kFgJmDxUDGVRlc3REZXRhaWxzLmFzcHg/aWQ9Q0VMRFQTU2VlIGFsbCB0ZXN0IHNjb3JlcwVDRUxEVGQCCA8VBBdDQSBFbmcuIExhbmcuIERldi4gVGVzdAcwNS8yMDE0J2NvbG9yOiM1YTZhOTM7YmFja2dyb3VuZC1jb2xvcjojZTZlZGZmOw5FYXJseSBBZHZhbmNlZGQCBA9kFggCAw9kFgJmD2QWAmYPFQEeSXJ2aW5lIFVuaWZpZWQgU2Nob29sIERpc3RyaWN0ZAIFDxYCHwRoZAIHDxYCHwRoFgJmD2QWAmYPFQMZVGVzdERldGFpbHMuYXNweD9pZD1DRUxEVBNTZWUgYWxsIHRlc3Qgc2NvcmVzBUNFTERUZAIIDxUEFExpc3QuICZhbXA7IFNwZWFraW5nBzA1LzIwMTQAA04vQWQCBQ9kFggCAw9kFgJmD2QWAmYPFQEeSXJ2aW5lIFVuaWZpZWQgU2Nob29sIERpc3RyaWN0ZAIFDxYCHwRoZAIHDxYCHwRoFgJmD2QWAmYPFQMZVGVzdERldGFpbHMuYXNweD9pZD1DRUxEVBNTZWUgYWxsIHRlc3Qgc2NvcmVzBUNFTERUZAIIDxUEB1JlYWRpbmcHMDUvMjAxNCdjb2xvcjojNWE2YTkzO2JhY2tncm91bmQtY29sb3I6I2U2ZWRmZjsORWFybHkgQWR2YW5jZWRkAgYPZBYIAgMPZBYCZg9kFgJmDxUBHklydmluZSBVbmlmaWVkIFNjaG9vbCBEaXN0cmljdGQCBQ8WAh8EaGQCBw8WAh8EaBYCZg9kFgJmDxUDGVRlc3REZXRhaWxzLmFzcHg/aWQ9Q0VMRFQTU2VlIGFsbCB0ZXN0IHNjb3JlcwVDRUxEVGQCCA8VBAdXcml0aW5nBzA1LzIwMTQnY29sb3I6IzU3M2EwODtiYWNrZ3JvdW5kLWNvbG9yOiNmY2Y4ZTM7DEludGVybWVkaWF0ZWQCBw9kFggCAw9kFgJmD2QWAmYPFQEeSXJ2aW5lIFVuaWZpZWQgU2Nob29sIERpc3RyaWN0ZAIFDxYCHwRoZAIHDxYCHwRoFgJmD2QWAmYPFQMZVGVzdERldGFpbHMuYXNweD9pZD1DRUxEVBNTZWUgYWxsIHRlc3Qgc2NvcmVzBUNFTERUZAIIDxUECUxpc3RlbmluZwcwNS8yMDE0J2NvbG9yOiMyYzY2MmQ7YmFja2dyb3VuZC1jb2xvcjojZWVmNmRiOwhBZHZhbmNlZGQCCA9kFggCAw9kFgJmD2QWAmYPFQEeSXJ2aW5lIFVuaWZpZWQgU2Nob29sIERpc3RyaWN0ZAIFDxYCHwRoZAIHDxYCHwRoFgJmD2QWAmYPFQMZVGVzdERldGFpbHMuYXNweD9pZD1DRUxEVBNTZWUgYWxsIHRlc3Qgc2NvcmVzBUNFTERUZAIIDxUECFNwZWFraW5nBzA1LzIwMTQnY29sb3I6IzVhNmE5MztiYWNrZ3JvdW5kLWNvbG9yOiNlNmVkZmY7DkVhcmx5IEFkdmFuY2VkZAIJD2QWCAIDD2QWAmYPZBYCZg8VAR5JcnZpbmUgVW5pZmllZCBTY2hvb2wgRGlzdHJpY3RkAgUPFgIfBGhkAgcPFgIfBGgWAmYPZBYCZg8VAxlUZXN0RGV0YWlscy5hc3B4P2lkPUNFTERUE1NlZSBhbGwgdGVzdCBzY29yZXMFQ0VMRFRkAggPFQQNQ29tcHJlaGVuc2lvbgcwNS8yMDE0AANOL0FkAgoPZBYIAgMPZBYCZg9kFgJmDxUBHklydmluZSBVbmlmaWVkIFNjaG9vbCBEaXN0cmljdGQCBQ8WAh8EaGQCBw8WAh8EaBYCZg9kFgJmDxUDGVRlc3REZXRhaWxzLmFzcHg/aWQ9Q0VMRFQTU2VlIGFsbCB0ZXN0IHNjb3JlcwVDRUxEVGQCCA8VBA9DRUxEVCBDcml0ZXJpb24HMDUvMjAxNAADTi9BZAIPD2QWAmYPZBYSZg8PFgIfAgUIQ2FsZW5kYXJkZAIBDw8WAh8EZ2QWAmYPZBYCZg9kFgJmDw8WBB4FV2lkdGgbAAAAAAAAXkABAAAAHgRfIVNCAoACFgIeBXN0eWxlBRBmb250LXNpemU6U21hbGw7ZAICD2QWAmYPDxYEHw4bAAAAAADAYkABAAAAHw8CgAJkZAIIDw8WAh8CBQ1BZGQgTmV3IEV2ZW50ZGQCCw8PFgIfAgUJRGlzcGxheTogZGQCDA8QZA8WAmYCARYCBQNEYXkFBU1vbnRoFgFmZAINDw8WAh8EZ2QWAgIBDxYCHwdmFgJmD2QWAgIBD2QWAmYPZBYCZg8VASBZb3UgaGF2ZSBubyBldmVudHMgZm9yIHRoaXMgZGF0ZWQCDw8PFgIfBGhkZAIQD2QWCAICD2QWAmYPZBYCZg9kFgJmDw8WBB8OGwAAAAAAAF5AAQAAAB8PAoACFgIfEAUQZm9udC1zaXplOlNtYWxsO2QCAw9kFgJmD2QWAmYPZBYCZg8PFgQfDhsAAAAAAABeQAEAAAAfDwKAAhYCHxAFEGZvbnQtc2l6ZTpTbWFsbDtkAgcPDxYCHg1PbkNsaWVudENsaWNrBSRyZXR1cm4gQ2FsZW5kYXJFdmVudF9BZGRfQ2FsZW5kYXIoKTtkZAIIDw8WAh8RBSdyZXR1cm4gQ2FsZW5kYXJFdmVudF9EZWxldGVfQ2FsZW5kYXIoKTtkZAITDw8WAh8CBUxZb3UgYXJlIHNjaGVkdWxlZCB0byByZWNlaXZlIFdlZWtseSBQcm9ncmVzcyBFbWFpbHMgZXZlcnkgRnJpZGF5IGF0IDc6MDAgUE0uZGQCBw9kFgRmD2QWAmYPZBYCZg8PFgIfAgUNNzAuMTg3LjI0OS40OWRkAgEPZBYCZg9kFgRmDw8WAh8CBQw2OC41LjI0NC4xNzNkZAIBDw8WAh8CBRQzLzI3LzIwMjEgNDo0MTozOCBQTWRkAggPZBYCAgYPZBYCZg9kFgICAQ9kFgRmDw9kDxAWAmYCARYCFgIfBQLgBBYCHwVkDxYCAgcCAxYBBXxBZXJpZXMuV2ViLkN1c3RvbUNvbnRyb2wuQWVyaWVzU2Vzc2lvbkNvbnRleHRJbmZvUGFyYW1ldGVyLCBBZXJpZXNORVQsIFZlcnNpb249MS4wLjAuMCwgQ3VsdHVyZT1uZXV0cmFsLCBQdWJsaWNLZXlUb2tlbj1udWxsZGQCAQ88KwAJAQAPFgQfBhYAHwdmZGQCCg8PFgIfAgUJOS4yMS4zLjIyZGQCCw8PFgIfAgVAQ29weXJpZ2h0ICZjb3B5OyAxOTk1LTIwMjEgQWVyaWVzIFNvZnR3YXJlLiBBbGwgUmlnaHRzIFJlc2VydmVkLmRkGAIFHl9fQ29udHJvbHNSZXF1aXJlUG9zdEJhY2tLZXlfXxYNBSBjdGwwMCRNYWluQ29udGVudCRjdGwxMCRvcG5DbGFzcwUjY3RsMDAkTWFpbkNvbnRlbnQkY3RsMTAkb3BuUGVyc29uYWwFIWN0bDAwJE1haW5Db250ZW50JGN0bDEwJG9wblNjaG9vbAUjY3RsMDAkTWFpbkNvbnRlbnQkY3RsMTAkb3BuRGlzdHJpY3QFJGN0bDAwJE1haW5Db250ZW50JGN0bDEwJG9wbkNsYXNzZXMkMAUlY3RsMDAkTWFpbkNvbnRlbnQkY2hrR2FkZ2V0QXR0U3VtbWFyeQUpY3RsMDAkTWFpbkNvbnRlbnQkY2hrR2FkZ2V0Q2FsZW5kYXJFdmVudHMFIGN0bDAwJE1haW5Db250ZW50JGNoa0dhZGdldFRhc2tzBR5jdGwwMCRNYWluQ29udGVudCRjaGtHYWRnZXRJTlYFKGN0bDAwJE1haW5Db250ZW50JGNoa0dhZGdldFJlc291cmNlTGlua3MFIWN0bDAwJE1haW5Db250ZW50JGNoa0NsYXNzU3VtbWFyeQUeY3RsMDAkTWFpbkNvbnRlbnQkY2hrQnJpZWZjYXNlBSVjdGwwMCRNYWluQ29udGVudCRjaGtJQVBTdGF0dXNTdW1tYXJ5BTRjdGwwMCRNYWluQ29udGVudCRzdWJBbGVydHMkbHZBbGVydFRocmVzaG9sZFN0dWRlbnRzD2dkBY1TACaHOdVEGMGIRu2anyaVewzAPZyLOz0Sd1hkWOc=">
      </div>
  
      <script type="text/javascript">
      //<![CDATA[
      var theForm = document.forms['aspnetForm'];
      if (!theForm) {
          theForm = document.aspnetForm;
      }
      function __doPostBack(eventTarget, eventArgument) {
          if (!theForm.onsubmit || (theForm.onsubmit() != false)) {
              theForm.__EVENTTARGET.value = eventTarget;
              theForm.__EVENTARGUMENT.value = eventArgument;
              theForm.submit();
          }
      }
      //]]>
      </script>
  
  
      <script src="/WebResource.axd?d=glptq-WKE3sTB2grG9MKdjeDDjTu0mebiwvzT4R0EUyuZ2h4uVI-u4qldUhtSqeDu2o0npzs72R3RXxV-oRB1uXPyV-4jgRCF26tI1eSheE1&amp;t=636934633199995647" type="text/javascript"></script>
  
      <script language="javascript">var isSafari = true;function isIE(){return false;}</script>
      <script type="text/javascript">
      //<![CDATA[
      var isProfile_ClassSummary = 'True'; var ShowBackground_ClassSummary = 'True'; var ShowPrintButton_ClassSummary = 'False';function Confirmation(){if (true){ $('#ctl00_MainContent_ctl08_hiddenbutton').trigger('click');} else {const text = 'There is insufficent data available to print the CAASPP Report. Would you like to print the Test Scores Report instead?';aeriesWin.prototype.confirm(text, Confirmation_Callback);}}function Confirmation_Callback(result) {  if (result) {  $('#ctl00_MainContent_ctl08_hiddenbutton').trigger('click');  }}function CalendarEvent_Delete_Calendar(){ var EID = GetValue($get('ctl00_MainContent_ctl10_txtEID'), 'txt'); if(confirm('Are you sure you want to delete this event?')) { GeneralFunctions.CalendarEvent_Delete(EID, CalendarEvent_Delete_Result_Calendar) }; return false;}function CalendarEvent_Delete_Result_Calendar(result) { if(result) {$get('ctl00_MainContent_ctl10_btnRefresh').click(); } }function CalendarEvent_GetInfo_Calendar(){ var EID = GetValue($get('ctl00_MainContent_ctl10_txtEID'), 'txt'); var btn1 = $get('ctl00_MainContent_ctl10_btnEventOK'); var btn2 = $get('ctl00_MainContent_ctl10_btnDelete'); if((EID * 1) > 0) { GeneralFunctions.CalendarEvent_GetInfo(EID, CalendarEvent_GetInfo_Result_Calendar); }}function CalendarEvent_GetInfo_Result_Calendar(result){ if(result != null) {  SetValue($get('ctl00_MainContent_ctl10_txtTI'), result[0], 'txt');  SetValue($get('ctl00_MainContent_ctl10_txtDT_txtKendoDatePicker'), result[1], 'txt');  SetValue($get('ctl00_MainContent_ctl10_txtED_txtKendoDatePicker'), result[2], 'txt');  SetValue($get('ctl00_MainContent_ctl10_txtT1_txtKendoTimePicker'), result[3], 'txt');  SetValue($get('ctl00_MainContent_ctl10_txtT2_txtKendoTimePicker'), result[4], 'txt');  SetValue($get('ctl00_MainContent_ctl10_txtDE'), result[5], 'txt'); }}function CalendarEvent_Add_Calendar(){ var EID2 = $('#ctl00_MainContent_ctl10_txtEID').val(); var TI = GetValue($get('ctl00_MainContent_ctl10_txtTI'), 'txt'); var EID = GetValue($get('ctl00_MainContent_ctl10_txtEID'), 'txt'); var DT = GetValue($get('ctl00_MainContent_ctl10_txtDT_txtKendoDatePicker'), 'txt'); var ED = GetValue($get('ctl00_MainContent_ctl10_txtED_txtKendoDatePicker'), 'txt'); var T1 = GetValue($get('ctl00_MainContent_ctl10_txtT1_txtKendoTimePicker'), 'txt'); var T2 = GetValue($get('ctl00_MainContent_ctl10_txtT2_txtKendoTimePicker'), 'txt'); var DE = GetValue($get('ctl00_MainContent_ctl10_txtDE'), 'txt'); var SCP = ''; var AS1 = '';; GeneralFunctions.CalendarEvent_Add(TI, EID, DT, ED, T1, T2, DE, SCP, AS1, CalendarEvent_Add_Result_Calendar); return false;}function CalendarEvent_Add_Result_Calendar(result){ if(result != 'true') { alert(result); } else { ButtonClick($get('ctl00_MainContent_ctl10_btnRefresh')); }}function ButtonClick(btn) { if(btn != null) { btn.click(); }}function GetValue(ID, type){ if((ID != null) && (type == 'txt')) { return ID.value; } else if((ID != null) && (type == 'lbl')) { return ID.innerHTML; } return '';}function SetValue(ID, value, type){ if((ID != null) && (type == 'txt')) { ID.value = value; return true; } else if((ID != null) && (type == 'lbl')) { ID.innerHTML = value; return true; } return false;} var isProfile_ClassSummary = 'True'; var ShowBackground_ClassSummary = 'True'; var ShowPrintButton_ClassSummary = 'False';//]]>
      </script>
  
      <script src="/ScriptResource.axd?d=vRhMbRDBWTK46QzI6UGz7d3uJygVOTBzc7sbjUqu03HGl-56PIFxP2eEqdkSIyMvyWQfXnznIyq7tjc6GgKNluCx2eiVcIYXI_OsOnZkgPGzvFQQOhqbYyGYLXy7axFVX7ed6XXxHL6Gku-ct5yv8SXOCLfCn7jwK85APdJIeBw1&amp;t=ffffffffa580202a" type="text/javascript"></script>
      <script src="/ScriptResource.axd?d=UWI4a68PS8N9v6Yqb0cVC5EyXsB0qL3cw_xPy457X-F1OSIWp6HM9uJLrpXw2JGGFXiZQcjFhWm_EjMfr9EpE1xyT5NGOKZHkq72BuJaPMqrRhweAYqfR5EECCSyWtcjehrkw9w__po10tad41m86MIL98QWlnoyg_VOjOt9_hfhO7i6ZKfbP6kGTarL8aFJ0&amp;t=ffffffffa580202a" type="text/javascript"></script>
      <script src="/Scripts/AjaxControlToolkit/Bundle?v=Q8zwOlD68e_y2f0ZSls6DONz6PXxv7xmJgluhsnbLu01" type="text/javascript"></script>
      <script src="SetClientOptions.asmx/js" type="text/javascript"></script>
      <script src="GeneralFunctions.asmx/js" type="text/javascript"></script>
      <script src="Scheduling.asmx/js" type="text/javascript"></script>
      <script src="SecurityFunctions.asmx/js" type="text/javascript"></script>
      <script src="UserAccountOptionsService.asmx/js" type="text/javascript"></script>
      <div class="aspNetHidden">
  
          <input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="44FE8279">
      </div>
          <script type="text/javascript">
      //<![CDATA[
      Sys.WebForms.PageRequestManager._initialize('ctl00$TheMasterScriptManager', 'aspnetForm', ['tctl00$MainContent$ctl10$txtDate$updatepanel1','','tctl00$MainContent$ctl10$txtDT$updatepanel1','','tctl00$MainContent$ctl10$txtED$updatepanel1','','tctl00$MainContent$ctl10$txtT1$updatepanel1','','tctl00$MainContent$ctl10$txtT2$updatepanel1',''], [], [], 90, 'ctl00');
      //]]>
      </script>
  
          
          <div id="ctl00_pnlTop">
          
  
          <div id="AeriesFullPageTop">
  
              <div id="AeriesFullPageTopNavLeft">
                  <div id="AeriesFullPageHamburger">
                      <div id="hamburger">
                          <span></span>
                          <span></span>
                          <span></span>
                      </div>
                      <div id="cross">
                          <span></span>
                          <span></span>
                      </div>
                  </div>
                  <a href="Default.aspx" title="Aeries Home" id="AeriesTextLogo" class="normalmode">
                      <div class="icon-aeries">
                          <img alt="Aeries" title="Aeries" src="images/icon-brandmark.svg" onerror="this.src='images/icon-brandmark.png'; this.onerror=null;">
                      </div>
                      <div id="AeriesTextLogoFull" class="icon-aeries-full normalmode">
                          <img alt="Aeries Student Portal" title="Aeries Student" src="images/aeries-logo-a-student-portal.svg" onerror="this.src='images/aeries-logo-a-student-portal.png'; this.onerror=null;">
                      </div>
                      
                  </a>
              </div>		
              <nav id="AeriesFullPageStudentName">
                  
                  <div class="dropdown">
                              
                      <div id="StudentNameDropDown" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Radin Ahmadizadeh - University High School - Grade 11">
                          <div class="StudentProfileImage"><img src="StuPic.ashx?ID=174130127&amp;BM=&amp;SC=608&amp;SZ=XL" alt="Student Photo" title="Student Photo"></div>
                          <div class="LeftSide">
                              <div class="StudentName ellipsis">Radin Ahmadizadeh</div>
                              <div class="SchoolName ellipsis">University High School  - Grade 11</div>
                          </div>
                          <span class="icon-collapsed"></span></div>
                  
                      <div id="StudentNameDropDownMenu" class="dropdown-menu" aria-labelledby="StudentNameDropDown">
                          
                          <a class="StudentNameDropDownOption LinkNewStudent" href="AddNewStudentToParent.aspx" title="Click to add a new student">
                              <div class="StudentProfileImage NoImage">
                              </div>
                              <div class="LeftSide">
                                  Link a New Student
                              </div>
                          </a>
                      </div>
                  </div>
                  
  
                  
  
              </nav>
              <div id="AeriesFullPageTopNavRight">
                  <div id="AeriesFullPageSearch" class="normalmode">				
                      <input type="text" id="AeriesFullPageSearchInput" autocomplete="off" name="AeriesFullPageSearchInputR9477" class="AeriesFullPageSearchInput normalmode" aria-label="Start Typing to Search for Students, Pages, Classes" placeholder="Search students, pages, classes">
                  </div>
                  
                  <input name="ctl00$SC" type="hidden" id="ctl00_SC" class="MasterSC" value="608">
                  <input name="ctl00$SN" type="hidden" id="ctl00_SN" class="MasterSN" value="26347">
                  <input name="ctl00$PID" type="hidden" id="ctl00_PID" class="MasterPID" value="174130127">
  
                  <ul class="nav navbar-nav navbar-right" id="nav-settings">
                      <li class="dropdown-submenu nav-buttons">
                          <a href="#" class="dropdown-toggle expandable" data-toggle="dropdown" id="nav-account-dropdown-icon" aria-label="Open Settings Menu for jiliahatam99@gmail.com" title="Settings for jiliahatam99@gmail.com">
                              <span class="normalmode">
                                  <span id="ctl00_lblWelcomeName" class="lblWelcomeName ellipsis LeftSide">jiliahatam99@gmail.com</span>
                                  <span class="icon-collapsed"></span>
                              </span>
                              <span class="tinymode">
                                  <span id="collapsed-settings-icon"></span>
                              </span>									
                          </a>
                          <ul class="dropdown-menu SubTab forceRight" id="nav-account-dropdown" style="margin-top:0; padding-top:0;">			
                              <li id="ctl00_liParentNotification" class="zebra" css="ContextMenuItem">
                                  <a id="aParentNotification" href="/ParentNotificationPreferences.aspx">Parent Notification Preferences</a>										
                              </li>
                              
                              <li class="zebra">
                                  <a id="aChangePWD" css="ContextMenuItem" href="/ChangePassword.aspx">Change Password</a>
                              </li>
                              
                              <li class="zebra">
                                  <a id="aAddSTU" css="ContextMenuItem" href="/AddNewStudentToParent.aspx">Add New Student To Your Account</a>										
                              </li>
                              
                              <li class="zebra">
                                  <a id="aPreview" css="ContextMenuItem" href="?SetParentPortalPreview=False">Turn Off Preview Mode</a>										
                              </li>
                                                      
                              <li class="zebra">
                                  <a id="aLogOut" css="ContextMenuItem" href="/LogOut.aspx">Log Out</a>
                              </li>									
                          </ul>
                      </li>
                  </ul>
              </div>
  
              <div id="AeriesFullPageTopBar"></div>
              <div id="SearchResults" style="display: none;">
                      <div id="SearchResultsContent">
                          <div id="SearchResultsOpen" style="display: none;"><div class="SearchTextHeading">Begin Typing to search<span></span></div><div class="results">Start typing in a page, class, or student to see results here.</div></div>
                          <div id="SearchResultsContentStudents" style="display: none;"><div class="SearchTextHeading">Students<span></span></div><div class="results"></div></div>					
                          <div id="SearchResultsContentClasses" style="display: none;"><div class="SearchTextHeading">Classes<span></span></div><div class="results"></div></div>
                          <div id="SearchResultsContentContacts" style="display: none;"><div class="SearchTextHeading">Contacts<span></span></div><div class="results"></div></div>
                          <div id="SearchResultsContentPages" style="display: none;"><div class="SearchTextHeading">Pages<span></span></div><div class="results"></div></div>
                          <div id="SearchResultsRecentlyViewed" style="display: none;"><div class="SearchTextHeading">Recently Viewed<span></span></div><div class="results"></div></div>
                          <div id="SearchResultsNoResults" style="display: none;"><div class="SearchTextHeading">No Results<span></span></div><div class="results">Sorry, no results were found.<br>Please try broadening your search.</div></div>
                      </div>
                  </div>
          </div>
          
          
      </div>
          <main id="AeriesFullPageBody" class="view" data-root-url="https://my.iusd.org/" data-school-code="608">
              <div id="ctl00_pnlNav">
          
              <div id="AeriesFullPageNav" class="tinymodehidden">			
                  <div id="AeriesFullPageNavItems">
                      <div class="tinymode AeriesLogoSidebar">
                          <div class="icon-aeries">
                              <img alt="Aeries" title="Aeries" src="images/icon-brandmark.svg" onerror="this.src='images/icon-brandmark.png'; this.onerror=null;">						
                          </div>
                          <div id="AeriesTextLogoMobile" class="icon-aeries-full">
                              <img alt="Aeries Student Portal" title="Aeries Student" src="images/aeries-logo-a-student-portal.svg" onerror="this.src='images/aeries-logo-a-student-portal.png'; this.onerror=null;">
                          </div>
                      </div>
  
                      <div id="ctl00_AeriesFullPageParentNav_AeriesFullPageParentNav" class="AeriesFullPageParentNav"><div id="TOP_1" class="AeriesFullPageParentNavMainLink NavDashboard"> 
      <a class="" href="Default.aspx" onclick="return true;" name="Dashboard" aria-expanded="false" id="NavMainDashboard" target="" aria-haspopup="true">Dashboard</a> 
      </div> 
      <div id="TOP_2" class="AeriesFullPageParentNavMainLink NavStudentInfo AeriesFullPageParentNavMainLinkExpandable"> 
      <a class="" href="javascript:void(0);" onclick="return true;" name="Student Info" aria-expanded="false" id="NavMainStudent Info" target="" aria-haspopup="true">Student Info</a> 
      <div id="Sub_2" class="AeriesFullPageParentNavSubLink"><div class="AeriesFullPageParentNavSubLinkMenu"><a class="NavBack normalmode" href="#" aria-expanded="true" title="Click to go back to the main Nav">Student Info</a> 
      <a class="" href="StudentProfile.aspx" name="Profile" aria-expanded="true" id="NavSubProfile">Profile</a> 
      <a class="" href="Students.aspx" name="Demographics" aria-expanded="true" id="NavSubDemographics">Demographics</a> 
      <a class="" href="EmergencyContacts.aspx" name="Contacts" aria-expanded="true" id="NavSubContacts">Contacts</a> 
      <a class="" href="ParentDataConfirmation.aspx" name="Data Confirmation" aria-expanded="true" id="NavSubData Confirmation">Data Confirmation</a> 
      <a class="" href="Fees.aspx" name="Fees and Fines" aria-expanded="true" id="NavSubFees and Fines">Fees and Fines</a> 
      <a class="" href="UserDefinedStudentData.aspx?TC=BLCR" name="Blended Learning Course Requests" aria-expanded="true" id="NavSubBlended Learning Course Requests">Blended Learning Course Requests</a> 
      <a class="" href="UserDefinedStudentData.aspx?TC=CASS" name="CAASPP Login Cards" aria-expanded="true" id="NavSubCAASPP Login Cards">CAASPP Login Cards</a> 
      <a class="" href="UserDefinedStudentData.aspx?TC=NCVC" name="Report Possible/Confirmed COVID Case" aria-expanded="true" id="NavSubReport Possible/Confirmed COVID Case">Report Possible/Confirmed COVID Case</a> 
      </div></div> 
      </div> 
      <div id="TOP_3" class="AeriesFullPageParentNavMainLink NavAttendance AeriesFullPageParentNavMainLinkExpandable"> 
      <a class="" href="javascript:void(0);" onclick="return true;" name="Attendance" aria-expanded="false" id="NavMainAttendance" target="" aria-haspopup="true">Attendance</a> 
      <div id="Sub_3" class="AeriesFullPageParentNavSubLink"><div class="AeriesFullPageParentNavSubLinkMenu"><a class="NavBack normalmode" href="#" aria-expanded="true" title="Click to go back to the main Nav">Attendance</a> 
      <a class="" href="Attendance.aspx" name="Attendance" aria-expanded="true" id="NavSubAttendance">Attendance</a> 
      </div></div> 
      </div> 
      <div id="TOP_4" class="AeriesFullPageParentNavMainLink NavGrades AeriesFullPageParentNavMainLinkExpandable"> 
      <a class="" href="javascript:void(0);" onclick="return true;" name="Grades" aria-expanded="false" id="NavMainGrades" target="" aria-haspopup="true">Grades</a> 
      <div id="Sub_4" class="AeriesFullPageParentNavSubLink"><div class="AeriesFullPageParentNavSubLinkMenu"><a class="NavBack normalmode" href="#" aria-expanded="true" title="Click to go back to the main Nav">Grades</a> 
      <a class="" href="GradebookSummary.aspx" name="Gradebook" aria-expanded="true" id="NavSubGradebook">Gradebook</a> 
      <a class="" href="GradebookDetails.aspx" name="Gradebook Details" aria-expanded="true" id="NavSubGradebook Details">Gradebook Details</a> 
      <a class="" href="StudentReportCardHistory.aspx" name="Report Card History" aria-expanded="true" id="NavSubReport Card History">Report Card History</a> 
      <a class="" href="GraduationRequirements.aspx" name="Graduation Status" aria-expanded="true" id="NavSubGraduation Status">Graduation Status</a> 
      <a class="" href="Transcripts.aspx" name="Transcripts <span class='metadata' style='display: none;'>History</span>" aria-expanded="true" id="NavSubTranscripts <span class='metadata' style='display: none;'>History</span>">Transcripts <span class="metadata" style="display: none;">History</span></a> 
      <a class="" href="StudentStandardsBasedProgress.aspx" name="Standards Based Progress Dashboard" aria-expanded="true" id="NavSubStandards Based Progress Dashboard">Standards Based Progress Dashboard</a> 
      </div></div> 
      </div> 
      <div id="TOP_5" class="AeriesFullPageParentNavMainLink NavClasses AeriesFullPageParentNavMainLinkExpandable"> 
      <a class="" href="javascript:void(0);" onclick="return true;" name="Classes" aria-expanded="false" id="NavMainClasses" target="" aria-haspopup="true">Classes</a> 
      <div id="Sub_5" class="AeriesFullPageParentNavSubLink"><div class="AeriesFullPageParentNavSubLinkMenu"><a class="NavBack normalmode" href="#" aria-expanded="true" title="Click to go back to the main Nav">Classes</a> 
      <a class="" href="Classes.aspx" name="Classes" aria-expanded="true" id="NavSubClasses">Classes</a> 
      </div></div> 
      </div> 
      <div id="TOP_6" class="AeriesFullPageParentNavMainLink NavMedical AeriesFullPageParentNavMainLinkExpandable"> 
      <a class="" href="javascript:void(0);" onclick="return true;" name="Medical" aria-expanded="false" id="NavMainMedical" target="" aria-haspopup="true">Medical</a> 
      <div id="Sub_6" class="AeriesFullPageParentNavSubLink"><div class="AeriesFullPageParentNavSubLinkMenu"><a class="NavBack normalmode" href="#" aria-expanded="true" title="Click to go back to the main Nav">Medical</a> 
      <a class="" href="Immunizations.aspx" name="Immunizations" aria-expanded="true" id="NavSubImmunizations">Immunizations</a> 
      </div></div> 
      </div> 
      <div id="TOP_7" class="AeriesFullPageParentNavMainLink NavTestScores AeriesFullPageParentNavMainLinkExpandable"> 
      <a class="" href="javascript:void(0);" onclick="return true;" name="Test Scores" aria-expanded="false" id="NavMainTest Scores" target="" aria-haspopup="true">Test Scores</a> 
      <div id="Sub_7" class="AeriesFullPageParentNavSubLink"><div class="AeriesFullPageParentNavSubLinkMenu"><a class="NavBack normalmode" href="#" aria-expanded="true" title="Click to go back to the main Nav">Test Scores</a> 
      <a class="" href="TestDetails.aspx" name="Test Details" aria-expanded="true" id="NavSubTest Details">Test Details</a> 
      <a class="" href="StateTestScoresReports.aspx" name="State Test Scores Reports" aria-expanded="true" id="NavSubState Test Scores Reports">State Test Scores Reports</a> 
      <a class="" href="TestScores.aspx" name="Test Scores" aria-expanded="true" id="NavSubTest Scores">Test Scores</a> 
      <a class="" href="CollegeTestScores.aspx" name="College Entrance Tests" aria-expanded="true" id="NavSubCollege Entrance Tests">College Entrance Tests</a> 
      </div></div> 
      </div> 
      <div id="TOP_9" class="AeriesFullPageParentNavMainLink NavTitan"> 
      <a class="" href="GoToTitan.aspx" onclick="return true;" name="Titan" aria-expanded="false" id="NavMainTitan" target="_blank" aria-haspopup="true"><img src="images/titan.png" style="border: 0; vertical-align: text-bottom; padding-right: 2px;"><span>Titan</span></a> 
      </div></div>
                  </div>
              </div>
              
      </div>
              <div id="AeriesFullPageContent">
                  
  
                  <div style="width:100%;"><span id="ctl00_lblAlert" class="RedText"></span></div>
  
                  
                  
  
                  
              
  
          
              <div>
                  <!-- *** Required to register AjaxControlToolkit *** -->
                  
                          
              </div>
              
  
              <!-- Parent Widgets -->
              
  
              <div class="Max1600 FullWidthAutoHeight" style="min-height: 500px;">
                  <!-- Immovable Top section. -->
                  <div class="FullWidthAutoHeight">
                      <div class="col-12">
                          <span id="ctl00_MainContent_lblWelcome" class="FullWidthAutoHeight ac MainTitle" style="font-size: 22px; font-weight: bold; margin: 10px 0 -18px 0;">Welcome to the Aeries Portal for Radin Ahmadizadeh</span>										
                      </div>
                  </div>
  
                  <div class="col-12 line">
                      <div id="ctl00_MainContent_divParentWidgets" class="WidgetsHolder FullWidthAutoHeight">
                      
                      <div class="grid muuri" style="height: 5216px;">
  
                          
  
                          <section class="item muuri-item muuri-item-shown" id="iStudents" data-id="0" style="left: 0px; top: 0px; transform: translateX(0px) translateY(0px); display: block; touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><div class="item-content Max900" style="opacity: 1; transform: scale(1);">
                              
  
      <div id="divStudents" class="widget-wrapper">
          <div class="CatHeader widget-head">
              <div class="widget-options pull-right">
          
                  <span class="icon-expanded widget-collapse"></span>
              </div>
              <div class="widget-title">Students</div>
          </div>
          <div class="widget-body">
  
          
                  <div class="StudentCard">
                      <div class="StudentCardPhoto">
                          <img src="StuPic.ashx?ID=174130127&amp;BM=&amp;SC=608&amp;SZ=XL" alt="Student Photo" title="Student Photo">
                      </div>
                      <div class="StudentCardLinks">
                          
                          <a href="ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a44+AM&amp;SC=608&amp;SN=26347&amp;ReturnPage=GradebookSummary.aspx&amp;name=608_26347&amp;id=608_26347">Gradebook</a>
                          
                          <a href="ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a44+AM&amp;SC=608&amp;SN=26347&amp;ReturnPage=GradebookDetails.aspx&amp;name=608_26347&amp;id=608_26347">Gradebook Details</a>
                          
                          <a href="ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a44+AM&amp;SC=608&amp;SN=26347&amp;ReturnPage=Attendance.aspx&amp;name=608_26347&amp;id=608_26347">Attendance</a>
                          
                          <a href="ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a44+AM&amp;SC=608&amp;SN=26347&amp;ReturnPage=TestDetails.aspx&amp;name=608_26347&amp;id=608_26347">Test Details</a>
                          
                      </div>
                      <div class="StudentCardData">
                          <a class="TextHeading ellipsis" style="max-width: 220px;" href="ChangeStudent.aspx?cache=3%2f28%2f2021+5%3a11%3a44+AM&amp;SC=608&amp;SN=26347&amp;name=608_26347&amp;id=608_26347">Radin Ahmadizadeh</a>					
                          <label>Grade:</label> 11<br>
                          <label style="max-width: 220px;" class="ellipsis">University High School</label><br>
                      </div>
                  </div>
              
  
          </div>
      </div>
                          </div></section>
  
                          <section class="item muuri-item muuri-item-shown" id="iClasses" data-id="1" style="left: 0px; top: 0px; transform: translateX(0px) translateY(245px); display: block; touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><div class="item-content Max900" style="opacity: 1; transform: scale(1);">
                              
  
      <script type="text/javascript">
  
          function DecodeNote(note) {
              var deCodedNote;
              try {
                  deCodedNote = atob(note);
              } catch(ex) {
                  deCodedNote = note;
              }
              return deCodedNote;
          }
  
  
          //Comparer Function  
          function GetSortOrder(prop) {  
              return function(a, b) {  
                  if (a[prop] > b[prop]) {  
                      return 1;  
                  } else if (a[prop] < b[prop]) {  
                      return -1;  
                  }  
                  return 0;  
              }  
          } 
  
          $(document).ready(function () {
              var jqxhr = $.get($(".view").data("root-url") + "Widgets/ClassSummary/GetClassSummary?IsProfile=" + isProfile_ClassSummary.toString(), function (data) {
                  if (data.length >= 2) {
                      // Sort by data.Period
                      try {
                          data.sort(GetSortOrder("Period"));
                      } catch (ex) { }				
                  }
                  MakeClassCards(data);
              })
              .fail(function () {
                  $(".classesSection").html('<div class="CatHeader widget-head"><div class="widget-title">Class Summary (Failed to Load)</div></div>');
              });
          });
  
          function MakeClassCards(data) {
              var ClassCardsHtml = '';
  
              var hasPeriod = false;
              var hasSection = false;
              var displayCourseTitles = false;
              jQuery.each(data, function (i, val) {
                  if (val.TermGrouping == 'Current Terms') {
                      if (val.Period !== null && val.Period != "0") {
                          hasPeriod = true;
                          if (val.SectionNumber !== null && val.SectionNumber != "0") {
                              hasSection = true;
                          }
                      }
                  }
              });
  
              jQuery.each(data, function (i, val) {
                  if (val.TermGrouping == 'Current Terms') {
                      var gradebooklink = 'GradebookDetails.aspx';
                      var gradebookname = '';
                      if (val.Gradebook.length >= 10) {
                          gradebooklink = val.Gradebook.split("\"")[3];
                          gradebookname = val.Gradebook.split("\"")[4].replace('>', '<').split('<')[1];
                      }
                      ClassCardsHtml = ClassCardsHtml + ' <div class="Card ';
                      if (hasPeriod) {
                          ClassCardsHtml = ClassCardsHtml + 'CardWithPeriod"><div class="Period" title="Period ' + val.Period + '">' + val.Period + '</div>';
                      } else {
                          ClassCardsHtml = ClassCardsHtml + '">';
                      }
                      ClassCardsHtml = ClassCardsHtml + '<div class="RightSide ac"><span class="TextSubHeading">Grade</span><div class="Grade ' + GetGradeClass(val.CurrentMark) + '">' + val.CurrentMark;
                      if (val.CurrentPercentOrAverage.length >= 1) {
                          ClassCardsHtml = ClassCardsHtml + '<span>(' + val.CurrentPercentOrAverage + ')</span>';
                      }
                      
                      ClassCardsHtml = ClassCardsHtml + '</div></div><a class="TextHeading" href="' + gradebooklink + '" title="Go to Gradebook">';				
                      if (hasSection == false && !displayCourseTitles) {
                          ClassCardsHtml = ClassCardsHtml + gradebookname + '</a>' + val.TeacherName + '<span class="TextSubSection" style="padding-left: 12px;">' + val.RoomNumber + '</span>';
                      } else if (val.CourseName.length >= 1) {
                          ClassCardsHtml = ClassCardsHtml + val.CourseName + '</a>' + val.TeacherName + '<span class="TextSubSection" style="padding-left: 12px;">' + val.RoomNumber + '</span>';
                      } else {
                          ClassCardsHtml = ClassCardsHtml + val.TeacherName + '<span class="TextSubSection" style="padding-left: 12px;">' + val.RoomNumber + '</span></a>';
                      }
                      ClassCardsHtml = ClassCardsHtml + '<div class="footer TextSubSection"><div class="RightSide">' + val.LastATT + '</div>Missing Assignments ' + val.MissingAssignments + '</div>';
  
                      if (val.Website.length >= 1) {					
                          ClassCardsHtml = ClassCardsHtml + "<div class='VisitWebsite'><strong>Website:</strong> " + val.Website + "</div>";
                      }
  
                      if (val.OnlineMeetingURL.length >= 1) {					
                          ClassCardsHtml = ClassCardsHtml + "<div class='JoinMeeting'><strong>Meeting:</strong> " + val.OnlineMeetingURL + "</div>";
                      }
                      
                      if (val.LastUpdated.length >= 1) {
                          ClassCardsHtml = ClassCardsHtml + "<div class='ClassLastUpdated' title='Last Updated'><i class='fa fa-clock-o' title='Last Updated' aria-hidden='true'></i> " + val.LastUpdated + "</div>";
                      }				
  
                      ClassCardsHtml = ClassCardsHtml + '</div> ';
                  }			
              });
              $('.classesSection').html(ClassCardsHtml);
  
              refreshgrid();
          }
      </script>
  
      <style>
          .classesSection .Card {
              position: relative;
          }
          .ClassLastUpdated {
              position: absolute;
              z-index: 8;
              margin: 0;
              font-size: 13px;
              color: #96A0AF;
              right: 6px;
              bottom: -2px;
          }
          .VisitWebsite, .JoinMeeting {
              display: block;
              clear: both;
              margin: 0;
              padding: 0;
              vertical-align: middle;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-size: 13px;
              line-height: 21px;
              padding: 5px 0 2px;
          }
          .VisitWebsite strong, .JoinMeeting strong {
              min-width: 70px;
              float: left;
              font-size: 13px;
          }
          .VisitWebsite .AccessCode {
              float: left;
              width: auto !important;
              clear: none;
              padding: 0;
              margin: 0;
          }
          .VisitWebsite .AccessCode strong {
              padding-right: 4px;
          }
          .VisitWebsite .k-button {
              float: left;
              padding: 0 4px;
              margin: -2px 14px 0 0;
              height: 23px;
              line-height: 23px;
              min-width: 20px !important;
              vertical-align: middle;
          }
          .JoinMeeting .abtn {
              padding: 0 !important;
              margin: 0 8px 0 0;
              height: 20px;
              line-height: 26px;
              width: 28px;
              font-size: 18px;
          }
          .JoinMeeting .k-button {
              padding: 0 14px;
              margin: 0;
              height: 21px;
              line-height: 21px;
              min-width: 20px !important;
              vertical-align: middle;
          }
          .MeetingDetails {
              margin: 23px 0 0 -2px;
              min-width: 300px;
          }
          .JoinMeeting strong {
              display: inline-block;
          }
          .classesSection {
              display: flex;
              flex-wrap: wrap;
              width: 100%;
              padding-bottom: 30px !important;
          }
          .JoinMeeting .spacer {
              display: none !important;
          }
              
      </style>
  
      <div id="divClass" class="widget-wrapper">
          <div class="CatHeader widget-head">
              <div class="widget-options pull-right">
  
                  <span class="icon-expanded widget-collapse"></span>
              </div>
              <div class="widget-title">Classes</div>
          </div>	
          <div class="widget-body classesSection"> <div class="Card CardWithPeriod"><div class="Period" title="Period 1">1</div><div class="RightSide ac"><span class="TextSubHeading">Grade</span><div class="Grade GradeA">A-<span>(90.4%)</span></div></div><a class="TextHeading" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=7685082&amp;Term=S&amp;CDS=30736500000000&amp;SC=608" title="Go to Gradebook">AP Chemistry B</a>Bunch<span class="TextSubSection" style="padding-left: 12px;">710</span><div class="footer TextSubSection"><div class="RightSide"><table border="0" class="ac" style="box-sizing: content-box; width: 100px;"><tbody><tr><td class="ac" title="Monday - 03/22/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Tuesday - 03/23/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Wednesday - 03/24/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Thursday - 03/25/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Friday - 03/26/2021" style="width: 20%; border: none;">-</td></tr></tbody></table></div>Missing Assignments <a class="MissingAssignment" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=7685082&amp;Missing=1&amp;Term=S&amp;CDS=30736500000000&amp;SC=608"><span>15</span></a></div><div class="ClassLastUpdated" title="Last Updated"><i class="fa fa-clock-o" title="Last Updated" aria-hidden="true"></i> Mar 26</div></div>  <div class="Card CardWithPeriod"><div class="Period" title="Period 2">2</div><div class="RightSide ac"><span class="TextSubHeading">Grade</span><div class="Grade GradeA">A-<span>(93.3%)</span></div></div><a class="TextHeading" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=2102810&amp;Term=S&amp;CDS=30736500000000&amp;SC=608" title="Go to Gradebook">AP Psychology B</a>Jo,Tiffany<span class="TextSubSection" style="padding-left: 12px;">1022</span><div class="footer TextSubSection"><div class="RightSide"><table border="0" class="ac" style="box-sizing: content-box; width: 100px;"><tbody><tr><td class="ac" title="Monday - 03/22/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Tuesday - 03/23/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Wednesday - 03/24/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Thursday - 03/25/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Friday - 03/26/2021" style="width: 20%; border: none;">-</td></tr></tbody></table></div>Missing Assignments <a class="MissingAssignment" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=2102810&amp;Missing=1&amp;Term=S&amp;CDS=30736500000000&amp;SC=608"><span>8</span></a></div><div class="ClassLastUpdated" title="Last Updated"><i class="fa fa-clock-o" title="Last Updated" aria-hidden="true"></i> Mar 26</div></div>  <div class="Card CardWithPeriod"><div class="Period" title="Period 3">3</div><div class="RightSide ac"><span class="TextSubHeading">Grade</span><div class="Grade GradeA">A-<span>(91.0%)</span></div></div><a class="TextHeading" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=7739811&amp;Term=S&amp;CDS=30736500000000&amp;SC=608" title="Go to Gradebook">AP Physics 1/2B</a>Smay, T<span class="TextSubSection" style="padding-left: 12px;">707</span><div class="footer TextSubSection"><div class="RightSide"><table border="0" class="ac" style="box-sizing: content-box; width: 100px;"><tbody><tr><td class="ac" title="Monday - 03/22/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Tuesday - 03/23/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Wednesday - 03/24/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Thursday - 03/25/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Friday - 03/26/2021" style="width: 20%; border: none;">-</td></tr></tbody></table></div>Missing Assignments <span class="NonMissingAssignment">0</span></div><div class="ClassLastUpdated" title="Last Updated"><i class="fa fa-clock-o" title="Last Updated" aria-hidden="true"></i> Mar 25</div></div>  <div class="Card CardWithPeriod"><div class="Period" title="Period 4">4</div><div class="RightSide ac"><span class="TextSubHeading">Grade</span><div class="Grade GradeA">F<span>(90.1%)</span></div></div><a class="TextHeading" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=129263&amp;Term=S&amp;CDS=30736500000000&amp;SC=608" title="Go to Gradebook">AP Calc BC B</a>Davies<span class="TextSubSection" style="padding-left: 12px;">GYM</span><div class="footer TextSubSection"><div class="RightSide"><table border="0" class="ac" style="box-sizing: content-box; width: 100px;"><tbody><tr><td class="ac" title="Monday - 03/22/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Tuesday - 03/23/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Wednesday - 03/24/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Thursday - 03/25/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Friday - 03/26/2021" style="width: 20%; border: none;">-</td></tr></tbody></table></div>Missing Assignments <a class="MissingAssignment" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=129263&amp;Missing=1&amp;Term=S&amp;CDS=30736500000000&amp;SC=608"><span>7</span></a></div><div class="ClassLastUpdated" title="Last Updated"><i class="fa fa-clock-o" title="Last Updated" aria-hidden="true"></i> Mar 26</div></div>  <div class="Card CardWithPeriod"><div class="Period" title="Period 5">5</div><div class="RightSide ac"><span class="TextSubHeading">Grade</span><div class="Grade GradeA">A<span>(95.3%)</span></div></div><a class="TextHeading" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=1688416&amp;Term=S&amp;CDS=30736500000000&amp;SC=608" title="Go to Gradebook">AP ComSciPrin B</a>Kinney<span class="TextSubSection" style="padding-left: 12px;">509B</span><div class="footer TextSubSection"><div class="RightSide"><table border="0" class="ac" style="box-sizing: content-box; width: 100px;"><tbody><tr><td class="ac" title="Monday - 03/22/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Tuesday - 03/23/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Wednesday - 03/24/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Thursday - 03/25/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Friday - 03/26/2021" style="width: 20%; border: none;">-</td></tr></tbody></table></div>Missing Assignments <a class="MissingAssignment" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=1688416&amp;Missing=1&amp;Term=S&amp;CDS=30736500000000&amp;SC=608"><span>6</span></a></div><div class="ClassLastUpdated" title="Last Updated"><i class="fa fa-clock-o" title="Last Updated" aria-hidden="true"></i> Mar 26</div></div>  <div class="Card CardWithPeriod"><div class="Period" title="Period 6">6</div><div class="RightSide ac"><span class="TextSubHeading">Grade</span><div class="Grade GradeA">A<span>(92.5%)</span></div></div><a class="TextHeading" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=7447281&amp;Term=S&amp;CDS=30736500000000&amp;SC=608" title="Go to Gradebook">AP Eng Lang B</a>Kynor<span class="TextSubSection" style="padding-left: 12px;">218</span><div class="footer TextSubSection"><div class="RightSide"><table border="0" class="ac" style="box-sizing: content-box; width: 100px;"><tbody><tr><td class="ac" title="Monday - 03/22/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Tuesday - 03/23/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Wednesday - 03/24/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Thursday - 03/25/2021" style="width: 20%; border: none;">J</td><td class="ac" title="Friday - 03/26/2021" style="width: 20%; border: none;">-</td></tr></tbody></table></div>Missing Assignments <a class="MissingAssignment" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=7447281&amp;Missing=1&amp;Term=S&amp;CDS=30736500000000&amp;SC=608"><span>7</span></a></div><div class="ClassLastUpdated" title="Last Updated"><i class="fa fa-clock-o" title="Last Updated" aria-hidden="true"></i> Mar 11</div></div>  <div class="Card CardWithPeriod"><div class="Period" title="Period 9">9</div><div class="RightSide ac"><span class="TextSubHeading">Grade</span><div class="Grade GradeF"></div></div><a class="TextHeading" href="GradebookDetails.aspx" title="Go to Gradebook">Homeroom</a>Smay, T<span class="TextSubSection" style="padding-left: 12px;">707</span><div class="footer TextSubSection"><div class="RightSide"><table border="0" class="ac" style="box-sizing: content-box; width: 100px;"><tbody><tr><td class="ac" title="Monday - 03/22/2021" style="width: 20%; border: none;">J</td><td class="ac" title="Tuesday - 03/23/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Wednesday - 03/24/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Thursday - 03/25/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Friday - 03/26/2021" style="width: 20%; border: none;">-</td></tr></tbody></table></div>Missing Assignments </div></div> </div>
  
      </div>
          
          
                          </div></section>
  
                          
  
                          
  
                          
                          
                          
                          
                                              
                          
                          <section class="item muuri-item muuri-item-shown" id="iBackpack" data-id="8" style="left: 0px; top: 0px; transform: translateX(0px) translateY(2149px); display: block; touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
                              <div class="item-content" style="opacity: 1; transform: scale(1);">
  
                                  <div id="divBackpack" class="widget-wrapper">
                                      <div class="CatHeader widget-head">
                                          <div class="widget-options pull-right">
                                      
                                              <span class="icon-expanded widget-collapse"></span>
                                          </div>
                                          <div class="widget-title">Backpack</div>
                                      </div>
                                      <div class="widget-body">
                                          
                                      </div>
                                  </div>
  
                              </div>
                          </section>
  
                          
  
                              <section class="item muuri-item muuri-item-shown" id="iAttendance" data-id="9" style="left: 0px; top: 0px; transform: translateX(0px) translateY(2394px); display: block; touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
                                  <div class="item-content" style="opacity: 1; transform: scale(1);">
                                      <div id="divAttendance" class="widget-wrapper">
                                          <div class="CatHeader widget-head">
                                              <div class="widget-options pull-right">
                                          
                                                  <span class="icon-expanded widget-collapse"></span>
                                              </div>
                                              <div class="widget-title">Attendance Summary</div>
                                          </div>
                                          <div class="widget-body">
                                                  <table id="ctl00_MainContent_dlAttSummaryPeriod" cellspacing="0" style="border-width:0px;width:100%;border-collapse:collapse;">
          <tbody><tr>
              <td>								
                                                                      </td></tr><tr class="SubHeaderRow">
                                                                          <td class="HCell ac">Code</td>
                                                                          <td class="HCell al">Description</td>
                                                                          <td class="HCell ac">All</td>
                                                                          <td class="HCell ac">0</td>
                                                                          <td class="HCell ac">1</td>
                                                                          <td class="HCell ac">2</td>
                                                                          <td class="HCell ac">3</td>
                                                                          <td class="HCell ac">4</td>
                                                                          <td class="HCell ac">5</td>
                                                                          <td class="HCell ac">6</td>
                                                                          <td class="HCell ac">7</td>
                                                                          <td class="HCell ac">8</td>
                                                                          <td class="HCell ac">9</td>
                                                                      </tr>
                                                                  
          <tr>
              <td>
                                                                      </td></tr><tr>
                                                                          <td class="Data ac">B</td>
                                                                          <td class="Data al">Schl Busin</td>
                                                                          <td class="Data ac">1</td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac">1</td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac">1</td>
                                                                      </tr>
                                                                  
          <tr>
              <td>
                                                                      </td></tr><tr>
                                                                          <td class="Data ac">C</td>
                                                                          <td class="Data al">Cut/Truant</td>
                                                                          <td class="Data ac">5</td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac">4</td>
                                                                          <td class="Data ac">2</td>
                                                                          <td class="Data ac">4</td>
                                                                          <td class="Data ac">1</td>
                                                                          <td class="Data ac">4</td>
                                                                          <td class="Data ac">1</td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac"></td>
                                                                      </tr>
                                                                  
          <tr>
              <td>
                                                                      </td></tr><tr>
                                                                          <td class="Data ac">I</td>
                                                                          <td class="Data al">Illness</td>
                                                                          <td class="Data ac">1</td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac">1</td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac">1</td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac">1</td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac"></td>
                                                                      </tr>
                                                                  
          <tr>
              <td>
                                                                      </td></tr><tr>
                                                                          <td class="Data ac">J</td>
                                                                          <td class="Data al">DLNotEng</td>
                                                                          <td class="Data ac">6</td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac">1</td>
                                                                          <td class="Data ac">1</td>
                                                                          <td class="Data ac">3</td>
                                                                          <td class="Data ac">2</td>
                                                                          <td class="Data ac">4</td>
                                                                          <td class="Data ac">6</td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac">6</td>
                                                                      </tr>
                                                                  
          <tr>
              <td>
                                                                      </td></tr><tr>
                                                                          <td class="Data ac">O</td>
                                                                          <td class="Data al">DLEngOth</td>
                                                                          <td class="Data ac">0</td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac">1</td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac"></td>
                                                                      </tr>
                                                                  
          <tr>
              <td>
                                                                      </td></tr><tr>
                                                                          <td class="Data ac">Q</td>
                                                                          <td class="Data al">Quarantine</td>
                                                                          <td class="Data ac">3</td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac">1</td>
                                                                          <td class="Data ac">2</td>
                                                                          <td class="Data ac">1</td>
                                                                          <td class="Data ac">2</td>
                                                                          <td class="Data ac">1</td>
                                                                          <td class="Data ac">2</td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac"></td>
                                                                      </tr>
                                                                  
          <tr>
              <td>
                                                                      </td></tr><tr>
                                                                          <td class="Data ac">Y</td>
                                                                          <td class="Data al">DLEngCon</td>
                                                                          <td class="Data ac">0</td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac">1</td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac">1</td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac">1</td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac"></td>
                                                                      </tr>
                                                                  
          <tr>
              <td>
                                                                      </td></tr><tr>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data al">_*TOTALS*_</td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data ac"></td>
                                                                      </tr>
                                                                  
          <tr>
              <td>
                                                                      </td></tr><tr>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data al">EXCUSED</td>
                                                                          <td class="Data ac">4</td>
                                                                          <td class="Data ac">0</td>
                                                                          <td class="Data ac">1</td>
                                                                          <td class="Data ac">3</td>
                                                                          <td class="Data ac">1</td>
                                                                          <td class="Data ac">3</td>
                                                                          <td class="Data ac">1</td>
                                                                          <td class="Data ac">3</td>
                                                                          <td class="Data ac">0</td>
                                                                          <td class="Data ac">0</td>
                                                                          <td class="Data ac">0</td>
                                                                      </tr>
                                                                  
          <tr>
              <td>
                                                                      </td></tr><tr>
                                                                          <td class="Data ac"></td>
                                                                          <td class="Data al">UNEXCUSED</td>
                                                                          <td class="Data ac">11</td>
                                                                          <td class="Data ac">0</td>
                                                                          <td class="Data ac">5</td>
                                                                          <td class="Data ac">3</td>
                                                                          <td class="Data ac">7</td>
                                                                          <td class="Data ac">3</td>
                                                                          <td class="Data ac">8</td>
                                                                          <td class="Data ac">7</td>
                                                                          <td class="Data ac">0</td>
                                                                          <td class="Data ac">0</td>
                                                                          <td class="Data ac">6</td>
                                                                      </tr>
                                                                  
          <tr>
              <td>
                                                                      </td></tr><tr style="height:2px;">
                                                                          <td class="DataBottom ac" colspan="13" style="height:2px;"><a href="Attendance.aspx">Go to Attendance</a></td>
                                                                      </tr>
                                                                  
          
      </tbody></table>				
                                          </div>
                                      </div>
                                  </div>
                              </section>
  
                                              
                          
                                          
  
                          
                          
                                      
                          <section id="iPortalResources" data-id="11" class="item muuri-item muuri-item-shown" style="left: 0px; top: 0px; transform: translateX(0px) translateY(2844px); display: block; touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><div class="item-content" style="opacity: 1; transform: scale(1);">
                              
  
          
                  <div id="quick-resources" class="widget-wrapper">
                      
                      <div class="widget-head CatHeader">
                          <div class="widget-options pull-right">
                              <span class="icon-expanded widget-collapse"></span>
                          </div>
                          <div class="widget-title">Resources</div>
                      </div>
                      <div class="widget-body" style="position: relative;">
                          <table class="table table-hover" style="margin-bottom: 0;z-index:2;position: relative;">
                              <thead>
                                  <tr class="SubHeaderRow">
                                      <th class="HCell al">Site</th>
                                      <th class="HCell al">Description</th>
                                  </tr>
                              </thead>
                              <tbody>
              
                          </tbody>			
                      </table>
                      <div class="background-icon text-center">
                          <span class="fa fa-files-o fa-4x aeries-grey"></span>
                      </div>
                      </div>
                  </div>
              
                          </div></section>
                  
                          
                          <section id="iQuickTestScores" data-id="12" class="item muuri-item muuri-item-shown" style="left: 0px; top: 0px; transform: translateX(0px) translateY(3182px); display: block; touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><div class="item-content" style="opacity: 1; transform: scale(1);">
                              
  
      <style type="text/css">
          .quick-button-small {
              -webkit-border-radius: 5px 5px 5px 5px;
              -moz-border-radius: 5px 5px 5px 5px;
              border-radius: 5px 5px 5px 5px;
              height: 20px;
              font-size: 11.5px;
              font-family: Arial, Tahoma, Helvetica;
              background-color: white;
              border:1px solid #AEAEAE;
          }
          .quick-button-small:hover
              {
              background-color: #E3E3E3;
              }
          
      </style>
  
      <table id="ctl00_MainContent_ctl08_divEverything">
          <tbody><tr>
              <td>
              <div id="divRecentTestResults" class="widget-wrapper">
                  <div class="widget-head CatHeader">
                      <div class="widget-options pull-right">
                  
                          <span class="icon-expanded widget-collapse"></span>
                      </div>
                      <div class="widget-title">Test Results</div>
                  </div>
                  <div class="widget-body">
                      <div class="SubSectionHeader">Most Recent Test Results</div>
  
                      <div id="ctl00_MainContent_ctl08_divCA">
                          <table id="tblTST" class="NoPadding a-expand">
                                      
                                              
                                              
                                              <tbody><tr id="ctl00_MainContent_ctl08_rptQuickTestSCores_ctl00_trHeader" class="SubHeaderRow">
                  <td class="HCell al">Test</td>
                  <td class="HCell ac">Taken</td>
                  <td class="HCell ac">Result</td>
              </tr>
              
                                              <tr id="ctl00_MainContent_ctl08_rptQuickTestSCores_ctl00_trTestHeader" class="SubHeaderRow">
                  <td class="HCell al" colspan="3">
                                                      <a href="TestDetails.aspx?id=SBAC" target="_self" title="See all test scores">SBAC</a>&nbsp;&nbsp;
                                                      <input type="submit" name="ctl00$MainContent$ctl08$rptQuickTestSCores$ctl00$btnPrintSBAC" value=" Print " onclick="Confirmation();return false;" id="ctl00_MainContent_ctl08_rptQuickTestSCores_ctl00_btnPrintSBAC" class="quick-button-small">
                                                  </td>
              </tr>
              
                                              <tr>
                                                  <td class="Data al">Mathematics</td>
                                                  <td class="Data ac">05/2018</td>
                                                  <td class="Data ac" style="">Standard Exceeded</td>
                                              </tr>
                                          
                                              
                                              
                                              
                                              
                                              <tr>
                                                  <td class="Data al">English Lang Arts /Liter</td>
                                                  <td class="Data ac">05/2018</td>
                                                  <td class="Data ac" style="">Standard Exceeded</td>
                                              </tr>
                                          
                                              
                                              
                                              
                                              <tr id="ctl00_MainContent_ctl08_rptQuickTestSCores_ctl02_trTestHeader" class="SubHeaderRow">
                  <td class="HCell al" colspan="3">
                                                      <a href="TestDetails.aspx?id=CST" target="_self" title="See all test scores">CST</a>&nbsp;&nbsp;
                                                      
                                                  </td>
              </tr>
              
                                              <tr>
                                                  <td class="Data al">Science</td>
                                                  <td class="Data ac">06/2015</td>
                                                  <td class="Data ac" style="">Advanced</td>
                                              </tr>
                                          
                                              
                                              
                                              
                                              <tr id="ctl00_MainContent_ctl08_rptQuickTestSCores_ctl03_trTestHeader" class="SubHeaderRow">
                  <td class="HCell al" colspan="3">
                                                      <a href="TestDetails.aspx?id=CELDT" target="_self" title="See all test scores">CELDT</a>&nbsp;&nbsp;
                                                      
                                                  </td>
              </tr>
              
                                              <tr>
                                                  <td class="Data al">CA Eng. Lang. Dev. Test</td>
                                                  <td class="Data ac">05/2014</td>
                                                  <td class="Data ac" style="color:#5a6a93;background-color:#e6edff;">Early Advanced</td>
                                              </tr>
                                          
                                              
                                              
                                              
                                              
                                              <tr>
                                                  <td class="Data al">List. &amp; Speaking</td>
                                                  <td class="Data ac">05/2014</td>
                                                  <td class="Data ac" style="">N/A</td>
                                              </tr>
                                          
                                              
                                              
                                              
                                              
                                              <tr>
                                                  <td class="Data al">Reading</td>
                                                  <td class="Data ac">05/2014</td>
                                                  <td class="Data ac" style="color:#5a6a93;background-color:#e6edff;">Early Advanced</td>
                                              </tr>
                                          
                                              
                                              
                                              
                                              
                                              <tr>
                                                  <td class="Data al">Writing</td>
                                                  <td class="Data ac">05/2014</td>
                                                  <td class="Data ac" style="color:#573a08;background-color:#fcf8e3;">Intermediate</td>
                                              </tr>
                                          
                                              
                                              
                                              
                                              
                                              <tr>
                                                  <td class="Data al">Listening</td>
                                                  <td class="Data ac">05/2014</td>
                                                  <td class="Data ac" style="color:#2c662d;background-color:#eef6db;">Advanced</td>
                                              </tr>
                                          
                                              
                                              
                                              
                                              
                                              <tr>
                                                  <td class="Data al">Speaking</td>
                                                  <td class="Data ac">05/2014</td>
                                                  <td class="Data ac" style="color:#5a6a93;background-color:#e6edff;">Early Advanced</td>
                                              </tr>
                                          
                                              
                                              
                                              
                                              
                                              <tr>
                                                  <td class="Data al">Comprehension</td>
                                                  <td class="Data ac">05/2014</td>
                                                  <td class="Data ac" style="">N/A</td>
                                              </tr>
                                          
                                              
                                              
                                              
                                              
                                              <tr>
                                                  <td class="Data al">CELDT Criterion</td>
                                                  <td class="Data ac">05/2014</td>
                                                  <td class="Data ac" style="">N/A</td>
                                              </tr>
                                          
                                              <tr>
                                                  <td class="DataBottom ac" colspan="3" style="height:2px;"></td>
                                              </tr>
                                          
                                  </tbody></table>
                          <input type="submit" name="ctl00$MainContent$ctl08$hiddenbutton" value="" id="ctl00_MainContent_ctl08_hiddenbutton" class="Invisible">
                      </div>
  
                      
  
                  </div>
              </div>
      </td>
          </tr>
      </tbody></table>
  
  
  
  
                          </div></section>
                  
                          
                  
                          <section id="iParentCalendar" data-id="14" class="item muuri-item muuri-item-shown" style="left: 0px; top: 0px; transform: translateX(0px) translateY(3738px); display: block; touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><div class="item-content" style="opacity: 1; transform: scale(1);">
                              
  
      <div id="divQuickCalendar" class="widget-wrapper">
          <div class="widget-head CatHeader">
              <div class="widget-options pull-right">
          
                  <span class="icon-expanded widget-collapse"></span>
              </div>
              <div class="widget-title"><span id="ctl00_MainContent_ctl10_lblCalendar">Calendar</span></div>
          </div>
          <div class="widget-body">
  
              <div id="ctl00_MainContent_ctl10_divDay">
          
                  
                          </div><table class="NoPadding a-expand">
              <tbody><tr class="SubHeaderRow">
                  <td align="center" class="HCell">
                      <div id="ctl00_MainContent_ctl10_txtDate_updatepanel1" style="display: inline-block;">
          
              <span class="k-widget k-datepicker k-header" style="width: 120px; font-size: small;"><span class="k-picker-wrap k-state-default"><span class="k-widget k-maskedtextbox k-input" style="width: 100%; font-size: small;"><input name="ctl00$MainContent$ctl10$txtDate$txtKendoDatePicker" type="text" value="03/28/2021" id="ctl00_MainContent_ctl10_txtDate_txtKendoDatePicker" style="width: 100%; font-size: small;" data-role="datepicker" class="k-input k-textbox" role="combobox" aria-expanded="false" aria-owns="ctl00_MainContent_ctl10_txtDate_txtKendoDatePicker_dateview" aria-disabled="false" autocomplete="off"><span class="k-icon k-i-warning"></span></span><span unselectable="on" class="k-select" aria-label="select" role="button" aria-controls="ctl00_MainContent_ctl10_txtDate_txtKendoDatePicker_dateview"><span class="k-icon k-i-calendar"></span></span></span></span>
              
      </div>
                      
                  </td>			
              </tr>
              
              <tr>
                  
                  <td class="Data al">
                      <table border="0" style="padding: 1px; border-collapse: collapse; border-style: none; width: 100%;"><tbody><tr class="PlainData">
                          <td class="al">
                              <span class="icon-button-add">
                              <span id="ctl00_MainContent_ctl10_lblAddEvent" class="Clickable lblAddEvent">Add New Event</span>
                              </span>
                              <input type="submit" name="ctl00$MainContent$ctl10$btnRefresh" value="Refresh" id="ctl00_MainContent_ctl10_btnRefresh" style="display:none;">
                              <span id="ctl00_MainContent_ctl10_lblTest"></span>
                          </td>
                          <td class="ar">
                                  <span id="ctl00_MainContent_ctl10_lblDisplay">Display: </span>
                                  <select name="ctl00$MainContent$ctl10$CalendarView" onchange="javascript:setTimeout('__doPostBack(\'ctl00$MainContent$ctl10$CalendarView\',\'\')', 0)" id="ctl00_MainContent_ctl10_CalendarView">
          <option selected="selected" value="Day" id="lblDay">Day</option>
          <option value="Month" id="lblMonth">Month</option>
  
      </select>
                          </td>
                      </tr></tbody></table>
                  </td>
              </tr>
              
              <tr id="ctl00_MainContent_ctl10_rptCalendarDay_ctl00_trFooterNoRecords" style="height:200px;">
              <td class="Data ac">You have no events for this date</td>
          </tr>
          
                      
              
  
              
              
              
                  
              
          </tbody></table>
  
          </div>
      </div>
  
  
          <!-- Add Event Form - Beginning -->
          <div id="ctl00_MainContent_ctl10_AddEvent_Panel" style="border-style:None;">
          
              
              <div class="AddEventContainer KendoWindowPopup" style="display: none;">
  
                  <table class="NoPadding a-expand FullWidth">
                      <tbody><tr>
                          <td class="DataLE"></td>
                          <td class="ac">
                              <table class="NoPadding a-expand">
                                  <tbody><tr><td class="ac">
                          
                                      <table class="NoPadding a-expand">
                                      <tbody><tr class="SubHeaderRow">
                                          <td class="HCellT al"><b>&nbsp;Title&nbsp;</b></td>
                                      </tr>
                                  
                                      <tr>
                                          <td class="Data al">
                                              <input name="ctl00$MainContent$ctl10$txtTI" type="text" id="ctl00_MainContent_ctl10_txtTI" class="k-textbox" style="width:350px;">
                                              <input type="hidden" name="ctl00$MainContent$ctl10$txtEID" id="ctl00_MainContent_ctl10_txtEID" value="0">
                                          </td>
                                      </tr>
                                      </tbody></table>
                                  </td></tr>
                              
                                  <tr><td align="center">
                                      <table border="0" style="border-collapse: collapse; border-color: black; width:100%;">
                                      <tbody><tr class="SubHeaderRow">
                                          <td class="HCellT ac"><b>&nbsp;Start Date&nbsp;</b></td>
                                          <td class="HCellT ac"><b>&nbsp;End Date&nbsp;</b></td>
                                          <td class="HCellT ac"><b>&nbsp;Start Time&nbsp;</b></td>
                                          <td class="HCellT ac"><b>&nbsp;End Time&nbsp;</b></td>
                                      </tr>
                                      <tr>
                                          <td class="Data ac">&nbsp;<div id="ctl00_MainContent_ctl10_txtDT_updatepanel1" style="display: inline-block;">
              
              <span class="k-widget k-datepicker k-header" style="width: 120px; font-size: small;"><span class="k-picker-wrap k-state-default"><span class="k-widget k-maskedtextbox k-input" style="width: 100%; font-size: small;"><input name="ctl00$MainContent$ctl10$txtDT$txtKendoDatePicker" type="text" id="ctl00_MainContent_ctl10_txtDT_txtKendoDatePicker" style="width: 100%; font-size: small;" data-role="datepicker" class="k-input k-textbox" role="combobox" aria-expanded="false" aria-owns="ctl00_MainContent_ctl10_txtDT_txtKendoDatePicker_dateview" aria-disabled="false" autocomplete="off"><span class="k-icon k-i-warning"></span></span><span unselectable="on" class="k-select" aria-label="select" role="button" aria-controls="ctl00_MainContent_ctl10_txtDT_txtKendoDatePicker_dateview"><span class="k-icon k-i-calendar"></span></span></span></span>
              
          </div></td>
                                          <td class="Data ac">&nbsp;<div id="ctl00_MainContent_ctl10_txtED_updatepanel1" style="display: inline-block;">
              
              <span class="k-widget k-datepicker k-header" style="width: 120px; font-size: small;"><span class="k-picker-wrap k-state-default"><span class="k-widget k-maskedtextbox k-input" style="width: 100%; font-size: small;"><input name="ctl00$MainContent$ctl10$txtED$txtKendoDatePicker" type="text" id="ctl00_MainContent_ctl10_txtED_txtKendoDatePicker" style="width: 100%; font-size: small;" data-role="datepicker" class="k-input k-textbox" role="combobox" aria-expanded="false" aria-owns="ctl00_MainContent_ctl10_txtED_txtKendoDatePicker_dateview" aria-disabled="false" autocomplete="off"><span class="k-icon k-i-warning"></span></span><span unselectable="on" class="k-select" aria-label="select" role="button" aria-controls="ctl00_MainContent_ctl10_txtED_txtKendoDatePicker_dateview"><span class="k-icon k-i-calendar"></span></span></span></span>
              
          </div></td>
                                      
                                          <td class="Data ac">
                                              <div id="ctl00_MainContent_ctl10_txtT1_updatepanel1" style="display: inline-block;">
              
              <span class="k-widget k-timepicker k-header" style="width: 100px;"><span class="k-picker-wrap k-state-default"><input name="ctl00$MainContent$ctl10$txtT1$txtKendoTimePicker" type="text" id="ctl00_MainContent_ctl10_txtT1_txtKendoTimePicker" style="width: 100%;" data-role="timepicker" class="k-input" role="combobox" aria-expanded="false" aria-owns="ctl00_MainContent_ctl10_txtT1_txtKendoTimePicker_timeview" aria-disabled="false"><span unselectable="on" class="k-select" aria-label="select" role="button" aria-controls="ctl00_MainContent_ctl10_txtT1_txtKendoTimePicker_timeview"><span class="k-icon k-i-clock" style="margin-top: 7px;"></span></span></span></span>
          
          </div>
  
                                          </td>
                                          <td class="Data ac">
                                              <div id="ctl00_MainContent_ctl10_txtT2_updatepanel1" style="display: inline-block;">
              
              <span class="k-widget k-timepicker k-header" style="width: 100px;"><span class="k-picker-wrap k-state-default"><input name="ctl00$MainContent$ctl10$txtT2$txtKendoTimePicker" type="text" id="ctl00_MainContent_ctl10_txtT2_txtKendoTimePicker" style="width: 100%;" data-role="timepicker" class="k-input" role="combobox" aria-expanded="false" aria-owns="ctl00_MainContent_ctl10_txtT2_txtKendoTimePicker_timeview" aria-disabled="false"><span unselectable="on" class="k-select" aria-label="select" role="button" aria-controls="ctl00_MainContent_ctl10_txtT2_txtKendoTimePicker_timeview"><span class="k-icon k-i-clock" style="margin-top: 7px;"></span></span></span></span>
          
          </div>
  
                                          </td>
                                      </tr>
                                      </tbody></table>
                                  </td></tr>
  
                                  <!-- *** 07/01/2015 HB -- teacher event -->
                                  
                                  <tr><td class="ac">
                                      <table class="NoPadding a-expand">
                                      <tbody><tr class="SubHeaderRow">
                                          <td class="HCellT ac"><b>&nbsp;Description&nbsp;</b></td>
                                      </tr>
                                      <tr>
                                          <td class="Data ac">&nbsp; <textarea name="ctl00$MainContent$ctl10$txtDE" rows="4" cols="20" id="ctl00_MainContent_ctl10_txtDE" style="width:300px;"></textarea>&nbsp;</td>
                                      </tr>
                                      </tbody></table>
                                  </td></tr>
                              </tbody></table>
                          </td>
                      
                          <td class="DataLER"></td>
                      </tr>				
                  </tbody></table>
  
                  <div class="SectionFooter">
                      <input type="submit" name="ctl00$MainContent$ctl10$btnEventOK" value="Add Event" onclick="return CalendarEvent_Add_Calendar();" id="ctl00_MainContent_ctl10_btnEventOK" class="k-button-primary">
                      <input type="submit" name="ctl00$MainContent$ctl10$btnDelete" value="Delete" onclick="return CalendarEvent_Delete_Calendar();" id="ctl00_MainContent_ctl10_btnDelete" class="k-button" style="display: none;">
                      <input type="submit" name="ctl00$MainContent$ctl10$btnCancel" value="Cancel" onclick="CloseAddEvent(event);" id="ctl00_MainContent_ctl10_btnCancel" class="k-button">
                  </div>
  
              </div>
  
          
      </div>
  
          <!-- Add Event Form - Ending -->
  
      <label id="lblRootURL" style="display: none;">https://my.iusd.org/</label>
  
      <script type="text/javascript">
          function txtED_Changed() {
              var dt = $("#" + 'ctl00_MainContent_ctl10_txtDT_txtKendoDatePicker');
              var ed = $("#" + 'ctl00_MainContent_ctl10_txtED_txtKendoDatePicker');
              var dt1 = new Date(dt.val());
              var dt2 = new Date(ed.val());
  
              if ((dt1 != NaN) && (dt2 != NaN)) {
                  if (dt1.getTime() > dt2.getTime()) {
                      ed.val(dt.val());
                  }
              }
          }
  
          function calendarFilter_click() {
              var div = $("#divFilter");
              var isVisible = false;
              var left = 250;
  
              if (div.width() <= 200) { left = 100; }
  
              div.css({
                  top: $("#btnCalenderFilter").offset().top + 23,
                  left: $("#btnCalenderFilter").offset().left - left
              });
  
              if (div.attr("style") == undefined) {
                  isVisible = true;
              }
              else if (div.attr("style").indexOf("block") >= 0) {
                  isVisible = true;
              }
  
              if (isVisible) {
                  div.fadeOut(700, function () {
                      div.css("display", "none");
                  });
              }
              else {
                  div.fadeIn(700, function () {
                      div.css("display", "block");
                  });
              }
          }
  
          function ddlEventScope_OnSelect(e) {
              var sp = "";
              var tmp = null;
              var root = $("#lblRootURL").html();
  
              if (root[root.length] != "/") { root += "/"; }
  
              if (typeof e == "object") {
                  sp = this.dataItem(e.item).value;
              }
              else {
                  tmp = e.split("|");
                  sp = tmp[0];
              }
  
              var webMethod = root + "portal/teacher/event/getassociation/scopeid/" + sp + "/";
  
              var request = $.ajax({
                  url: webMethod,
                  type: "GET",
                  cache: false,
                  dataType: "json",
                  contentType: "application/json; charset=utf-8"
              });
  
              request.done(function (result) {
                  $("#ddlAssociation").kendoDropDownList({
                      dataTextField: "Description",
                      dataValueField: "Code",
                      dataSource: result
                  });
  
                  if (tmp != null) { $("#ddlAssociation").data("kendoDropDownList").value(tmp[1]); }
              });
  
              request.fail(function (jqXHR, textStatus) {
                  console.log("ddlEventScope_OnSelect Request Failed: " + jqXHR.responseText);
              });
          }
  
          $(document).ready(function () {
  
              data = [];
              data.push({ text: "Personal - just you", value: "PER" });
  
              
              var classes = $("#" + 'ctl00_MainContent_ctl10_opnClasses');
              if (classes) { $("#divClasses").css("display", 'inline-block'); }
  
              $("#divFilter").css("width", "456px");
              data.push({ text: "Section - one of your classes", value: "MST" });
              data.push({ text: "Course - all of your classes for a course", value: "CRS" });
              
  
              data.push({ text: "Teacher - all of your classes", value: "TCH" });
  
              if ($("#ddlEventScope").length > 0) {
                  $("#ddlEventScope").kendoDropDownList({
                      dataTextField: "text",
                      dataValueField: "value",
                      dataSource: data,
                      select: ddlEventScope_OnSelect
                  });
  
                  $("#ddlEventScope").data("kendoDropDownList").select(0);
                  ddlEventScope_OnSelect("PER|NONE");
  
                  $("#btnCalenderFilter").bind("click", calendarFilter_click);
                  $("#divEventTypes input[type='button']").on("click", function () {
                      $("#divFilter").fadeOut(700, function () {
                          $("#" + 'ctl00_MainContent_ctl10_btnRefresh').click();
                      });
                  });
              }
  
              $('body').on('click', '.lblAddEvent', function () {
                  try {
  
                      $('.AddEventContainer input:not(.k-button, .k-button-primary)').val('');
                      $('.AddEventContainer textarea').val('');
                      $("#ctl00_MainContent_ctl10_txtEID").val('0');
                      $("#ctl00_MainContent_ctl10_btnDelete").hide();
                      $("#ctl00_MainContent_ctl10_btnEventOK").val('Add Event');
                      var defaultDate = kendo.toString(new Date(), "MM/dd/yyyy");
                      $("#" + 'ctl00_MainContent_ctl10_txtDT_txtKendoDatePicker').val(defaultDate);
                      $("#" + 'ctl00_MainContent_ctl10_txtED_txtKendoDatePicker').val(defaultDate);
                      OpenAddEvent(true)
  
                  } catch (Ex) {
                      alert("An Error Has Occurred. " + Ex);
                  }
              }, 100);
  
          });
  
          function CalendarEvent_SetDate() {
              var strDate = (this._value.getMonth() + 1) + ' / ' + this._value.getDate() + ' / ' + this._value.getFullYear();
              console.log(strDate);
              if (strDate.length > 0) { GeneralFunctions.CalendarEvent_SetDate(strDate, CalendarEvent_SetDate_Result); }
          }
  
          function CalendarEvent_SetDate_Result(result) { if (result == 'Reset') { $('#ctl00_MainContent_ctl10_btnRefresh').click(); } }
  
  
          function EditEvent() {
              try {
                  $("#ctl00_MainContent_ctl10_btnDelete").show();
                  $("#ctl00_MainContent_ctl10_btnEventOK").val('Save Record');
                  OpenAddEvent(false);
  
              } catch (Ex) {
                  alert("An Error Has Occurred. " + Ex);
              }
          }
  
          function OpenAddEvent(isNew) {
              var title = isNew ? 'Add New Event' : 'Edit Event';
              var AddEventContainer = $(".AddEventContainer");
              AddEventContainer.kendoWindow({
                  visible: false,
                  draggable: true,
                  height: 420,
                  width: 640,
                  modal: true,
                  resizable: true,
                  appendTo: "form",
                  animation: false,
                  title: title
              });
              AddEventContainer.data('kendoWindow').center().open();
          }
  
          function CloseAddEvent(e) {
              e.preventDefault();
              var AddEventContainer = $(".AddEventContainer");
              AddEventContainer.data('kendoWindow').close();
              $('.AddEventContainer input:not(.k-button, .k-button-primary)').val('');
              $('.AddEventContainer textarea').val('');
              $("#ctl00_MainContent_ctl10_txtEID").val('0');
          }
  
      </script>
  
      <style type="text/css">
  
      .k-window  div.k-window-content
      {
          overflow: hidden;
      }
  
      .calendar-filter {
          font-size: 12pt;
          color: #06C;
      }
      .calendar-filter:hover {
          color: #FFF;
      }
  
      .bgClass {
          border: 1px solid #9DE788;
          background-color: #9DE788;
      }
  
      .bgPeronsal {
          border: 1px solid #F00;
          background-color: #F00;
      }
  
      .bgSchool {
          border: 1px solid #FF0;
          background-color: #FF0;
      }
  
      .bgDistrict {
          border: 1px solid #699;
          background-color: #699;
      }
  
      #divFilter {
          width: 200px;
          height: 200px;
          position: absolute;
          border: 2px solid #92B8CE;
          background-color: #fff;
          z-index: 10000;
      }
  
      #divEventTypes, #divClasses {
          width: 200px;
          height: 200px;
          overflow: auto;
          vertical-align: top;
          display: inline-block;
      }
  
      #divEventTypes ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
      }
  
      #divEventTypes ul li {
          height: 23px;
          text-align: left;
          vertical-align: top;
          padding-top: 5px;
          padding-left: 3px;
      }
  
      #divEventTypes ul li:hover {
          cursor: pointer;
          background-color: #e3e3e3;
      }
  
      #divEventTypes ul li label {
          vertical-align: top;
      }
  
      #divEventTypes div, #divClasses div {
          height: 25px;
          padding-top: 5px;
          background-color: #ccc;
          font-weight: bold;
      }
  
      #divEventTypes input[type='button'] {
          width: 100px;
          margin-top: 10px;
      }
  
      #divClasses {
          width: 252px;
          border-left: 1px solid #fff;
      }
  
      #divClasses table {
          width: 233px;
          border: none;
          border-spacing: 0;
          border-collapse: collapse;
          background-color: #f9f9f9;
      }
  
      #divClasses table td {
          height: 23px;
          padding-top: 5px;
          border: 1px solid transparent;
      }
  
      #divClasses table td:hover {
          cursor: pointer;
          background-color: #e1e8fe;
      }
  
      #divClasses table tr:nth-child(even) {
          background-color: #e3e3e3;
      }
  
      #divClasses table tr td label {
          vertical-align: top;
      }
  
      .k-item{
          word-break:keep-all !important;
      }
      </style>
                          </div></section>
  
                          
                          <section id="iWelcomeAndTips" data-id="2" class="item FullWidthAutoHeight muuri-item muuri-item-shown" style="left: 0px; top: 0px; transform: translateX(0px) translateY(1346px); display: block; touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><div class="item-content" style="opacity: 1; transform: scale(1);">
  
                              <div id="divWelcomeAndTips" class="widget-wrapper">
                                  <div class="CatHeader widget-head">
                                      <div class="widget-options pull-right">
                                          <span class="icon-expanded widget-collapse"></span>
                                      </div>
                                      <div class="widget-title">Welcome &amp; NewTips</div>
                                  </div>
                                  <div class="widget-body">								
                                      <div class="col-12">
                          <div class="WelcomeBlock">						
                              <div class="col-sm-12 col-md-12 col-lg-5 col-xl-6 ac" style="padding-right:60px;">
                                  <img alt="Aeries Welcomes you" title="Aeries Welcomes you" aria-label="Aeries Welcomes you" src="images/illustration-celebrating-people.svg" onerror="this.src='images/illustration-celebrating-people.png'; this.onerror=null;">
                              </div>
                              <div class="col-sm-12 col-md-12 col-lg-7 col-xl-6">							
                                  <h2>Welcome!</h2>
                                  <p>
                                      Thanks for taking the time to test drive the new Aeries Student Portal.<br>
                                      Here you can try some of the new features we’ve been working to improve.</p>
                                  <ul>
                                      <li>Explore our new Menu and Navigation</li>
                                      <li><a href="#AeriesFullPageSearchInput" onclick="setTimeout(function() { $('#AeriesFullPageSearchInput').val('').click().focus(); OpenUniversalSearch(); }, 100);">Use search to find a page or class.</a></li>
                                      <li><i class="fa fa-arrows" aria-hidden="true"></i> Drag and drop the widgets on this screen to re-order them</li>
                                      <li>Try the new mobile look on your smartphone browser</li>
                                  </ul></div></div></div>
                                  </div>
                              </div>
  
                          </div></section>
                          
                          
                          <section class="item muuri-item muuri-item-shown" id="iClassesOld" data-id="16" style="left: 0px; top: 0px; transform: translateX(0px) translateY(4371px); display: block; touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><div class="item-content Max1600" style="opacity: 1; transform: scale(1);">
                              
      <script>
  
          $().ready(function () {
  
              $.ajax({
                  type: "POST",
                  cache: false,
                  contentType: "application/json; charset=utf-8",
                  url: $(".view").data("root-url") + "Widgets/ClassSummary/home",
                  data: JSON.stringify({ "IsProfile": isProfile_ClassSummary.toString(), "ShowPrintButton": ShowPrintButton_ClassSummary.toString(), "ShowBackground": ShowBackground_ClassSummary.toString() }),
                  dataType: 'html',
                  success: function (data) {
                      
                      $(".classSummaryContainer").html(data);
  
                      var dsClasses = new kendo.data.DataSource({
                          transport: {
                              read: function (options) {
                                  $.ajax({
                                      type: "GET",
                                      url: $(".view").data("root-url") + "Widgets/ClassSummary/GetClassSummary?IsProfile=" + isProfile_ClassSummary.toString(),
                                      data: {},
                                      cache: false,
                                      success: function (response) {
                                          if (response.length) {
                                              var $grid = $("#gridClasses").data("kendoGrid");
  
                                              var showAllTerms = $('#ShowAllTerms').val().toLowerCase() == 'true';
                                              var profileView = isProfile_ClassSummary.toString().toLowerCase() == 'true';
  
                                              var groups = [];
  
                                              if (profileView) {
                                                  var cds = $("#districtCDS").val();
                                                  var sc = $("#schoolNumber").val();
  
  
                                                  var groupByDistricts = response.some(function (item) { return item.DistrictCDS != cds; });
  
                                                  if (groupByDistricts) {
                                                      groups.push({ "field": "DistrictName" });
                                                      groups.push({ "field": "SchoolSort" });
                                                  }
                                                  else {
                                                      var groupBySchools = response.some(function (item) { return item.SchoolNumber != sc; });
  
                                                      if (groupBySchools) { groups.push({ "field": "SchoolSort" }); }
                                                  }
  
  
                                              }
  
                                              if (showAllTerms) { groups.push({ "field": "TermGrouping", "dir": "asc" }) }
  
                                              $grid.dataSource.group(groups);
                                          }
  
                                          options.success(response);
                                      }
                                  });
                              }
                          }//,
                          //sort: { field: "Period", dir: "asc" }
                      });
  
                      setTimeout(function () {
                          var $gridClasses = $("#gridClasses").data("kendoGrid");
                          if ($gridClasses) {
                              $gridClasses.setDataSource(dsClasses);
                              $gridClasses.dataSource.read();
                          }
                      }, 800);
                      
                  },
                  error: function (XMLHttpRequest, textStatus, errorThrown) {
                      $(".classSummaryContainer").html('<div class="CatHeader widget-head"><div class="widget-title">Class Summary (Failed to Load)</div></div>');
                  }
              });
  
          });
  
      </script>
  
      <script type="text/javascript" src="Scripts/require/widgets/views/classsummary/classsummary.js?vsn=9.21.3.22"></script>
  
      <div id="ctl00_MainContent_ctl06_divClassSummary" class="classSummaryContainer">
  
      <style>
          #tableClassSummary {
              width: 100%;
          }
  
              #tableClassSummary .CatHeader {
                  border-bottom: none;
              }
  
          #gridClasses .k-grid-header th.k-header {
              vertical-align: middle;
          }
  
          @media (max-width: 1280px) {
              #gridClasses table td, #gridClasses .k-grid-header th.k-header > .k-link {
                  padding: 1px 1px 1px 1px;
              }
          }
  
          @media (min-width: 1281px) {
              #gridClasses table td, #gridClasses .k-grid-header th.k-header > .k-link {
                  padding: 1px 8px;
              }
          }
  
          #gridClasses {
              -moz-border-radius: 0px 0px 0px 0px;
              -webkit-border-radius: 0px 0px 0px 0px;
              border-radius: 0px 0px 0px 0px;
              font-size: 0.9em;
              border-collapse: collapse;
              border-style: none;
          }
  
              #gridClasses .k-group-cell {
                  border: 0;
                  margin: 0 !important;
                  padding: 0 !important;
                  background-color: #f5f5f5 !important;
              }
  
              #gridClasses thead tr th {
                  border-bottom: 1px solid #c8c9c9 !important;
              }
  
          th[data-title="Per"] {
              border: 0 !important;
          }
  
          tr.k-grouping-row > td {
              border: 0 !important;
              padding: 5px 0 0 0 !important;
          }
  
          .k-grid-header th.k-header > .k-link {
              font-weight: bold !important;
              text-align: center;
              vertical-align: middle;
              white-space: normal;
          }
  
          #divAddWebsite input {
              font-size: 0.9em;
              width: 70px;
          }
  
          #divAddWebsite div:first-child {
              font-size: 0.9em;
              height: 80px;
              overflow: auto;
          }
  
          #divAddWebsite input[type='button'] {
              margin: 2px;
          }
  
          .spring {
              background-color: #0C6;
          }
  
          .fall {
              background-color: #F80;
          }
  
          .year {
              background-color: rgb(45, 182, 216);
          }
  
          .summer {
              background-color: rgb(216, 45, 52);
          }
  
          .spring, .fall, .year, .summer {
              width: 8px;
              padding: 0;
              display: inline-block;
              min-height: 1em;
              vertical-align: middle;
              margin-right: 2px;
          }
  
          .class-summary-link {
              text-decoration: none;
              vertical-align: middle;
          }
  
              .class-summary-link:hover {
                  color: #446A9B;
              }
      </style>
  
      <div class="a-obj">
          <table id="tableClassSummary" class="widget-wrapper">
  
              <tbody><tr>
                  <td>
                      <div class="widget-head CatHeader">
                          <div class="widget-options pull-right">
                                      <a tabindex="0" class="btn btn-xs btn-circle aeries-white" data-placement="bottom" data-toggle="popover" data-html="true" data-content="
                                              <table id=&quot;tblTrendLegend&quot; class=&quot;NoPadding a-expand&quot; style=&quot;font-size:.75em;color:black;width:250px;&quot;>
                                                      <tr><td class=&quot;al&quot;>* Min/Max Assignment Scores Grading Scale is in effect.</td></tr>
                                                      <tr><td class=&quot;al&quot; ><img id=&quot;imgTrendEqual&quot; alt=&quot;Equal&quot; src=&quot;images/BlueLineGraph.png&quot; width=&quot;24&quot; /><span>-&nbsp;Nominal change</span></td></tr>
                                                      <tr><td class=&quot;al&quot;><img id=&quot;imgTrendUp&quot; alt=&quot;Equal&quot; src=&quot;images/GreenLineGraph.png&quot; width=&quot;24&quot; /><span>-&nbsp;Predicted increase of 1% or more</span></td></tr>
                                                      <tr><td class=&quot;al&quot;><img id=&quot;imgTrendDown&quot; alt=&quot;Equal&quot; src=&quot;images/RedLineGraph.png&quot; width=&quot;24&quot; /><span>-&nbsp;Predicted decrease of 1% or more</span></td></tr>
                                                      <tr><td class=&quot;al&quot;><a href=&quot;https://support.aeries.com/support/solutions/articles/14000078294-gradebook-score-trend-graph&quot; style=&quot;color:#446A9B;&quot; target=&quot;_blank&quot;>Help Me Understand the Trend</a></td></tr>
                                              </table>
                                          " data-original-title="" title=""><i class="fa fa-list"></i> Show Legend
                                      </a>
                              <div class="btn-group">
                                  <a href="" class="btn aeries-white btn-xs btn-circle dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true" aria-expanded="true">
                                      Options
                                      <span class="icon-collapsed" title="Click to Expand"> </span>
                                  </a>
                                  <ul class="dropdown-menu pull-right" style="width:220px;">
                                      <li style="padding: 8px;">
                                          <input checked="checked" class="LargeCheck" data-val="true" data-val-required="The ShowAllTerms field is required." id="ShowAllTerms" name="ShowAllTerms" onclick="setUserAccountOption();" style="padding: 3px; vertical-align:text-top;" type="checkbox" value="True"><input name="ShowAllTerms" type="hidden" value="false">
                                          <label class="al" for="ShowAllTerms">Show All Terms</label>
                                          <input type="hidden" id="districtCDS" value="30736500000000">
                                          <input type="hidden" id="schoolNumber" value="608">
                                      </li>
                                  </ul>
                              </div>
  
                              <span class="icon-expanded widget-collapse"></span>
                          </div>
                          <div class="widget-title">Class Summary</div>
                      </div>
                  </td>
              </tr>
              <tr class="widget-body">
                  <td class="Data" style="display: block; width: 100%;">
                      <div>
                          <div class="k-widget k-grid k-display-block" id="gridClasses" style="text-align: left;border:none; " data-role="grid"><table class="classSummaryTable" role="grid"><colgroup><col class="k-group-col"><col><col><col><col><col><col><col><col><col style="width:90px"><col style="width:100px"><col style="width:120px"><col style="width:100px"><col></colgroup><thead class="k-grid-header" role="rowgroup"><tr role="row"><th class="k-group-cell k-header" scope="col"></th><th class="k-header" data-field="PeriodTitle" data-index="0" data-title="Per" scope="col"><span class="k-link">Per</span></th><th class="k-header normalmode" data-field="CourseNumberAndName" data-index="1" data-title="Course" scope="col"><span class="k-link">Course</span></th><th class="k-header normalmode" data-field="TeacherName" data-index="2" data-title="Teacher" scope="col"><span class="k-link">Teacher</span></th><th class="k-header normalmode" data-field="RoomNumber" data-index="3" data-title="Room" scope="col"><span class="k-link">Room</span></th><th class="k-header normalmode" data-field="Gradebook" data-index="4" data-title="Gradebook" scope="col"><span class="k-link">Gradebook</span></th><th class="k-header tinymodeTC" data-field="Gradebook" data-index="5" data-title="Details" scope="col"><span class="k-link">Details</span></th><th class="k-header" data-field="Percent" data-index="6" data-title="%" scope="col" style="display:none"><span class="k-link">%</span></th><th class="k-header" data-field="Average" data-index="7" data-title="Avg" scope="col" style="display:none"><span class="k-link">Avg</span></th><th class="k-header" data-field="CurrentMark" data-index="8" data-title="Mark" scope="col" style="display:none"><span class="k-link">Mark</span></th><th class="k-header" data-field="CurrentMarkAndScore" data-index="9" data-title="Mark" scope="col"><span class="k-link">Mark</span></th><th class="k-header" data-field="Trend" data-index="10" data-title="Trend" scope="col"><span class="k-link">Trend</span></th><th class="k-header" data-field="MissingAssignments" data-index="11" data-title="Missing Assignment" scope="col"><span class="k-link">Missing Assignment</span></th><th class="k-header" data-field="LastATT" data-index="12" data-title="<a href=&quot;Attendance.aspx&quot;title=&quot;Open Attendance Summary&quot;>Past 5 Days</a><table class=&quot;ac&quot; style=&quot;border: none; width: 100px;&quot;><tr style&quot;border: none;&quot;><td class=&quot;ac&quot; style=&quot;width:20%; border:none;&quot; title=&quot;Tuesday - 03/23/2021&quot;>T</td><td class=&quot;ac&quot; style=&quot;width:20%; border:none;&quot; title=&quot;Wednesday - 03/24/2021&quot;>W</td><td class=&quot;ac&quot; style=&quot;width:20%; border:none;&quot; title=&quot;Thursday - 03/25/2021&quot;>T</td><td class=&quot;ac&quot; style=&quot;width:20%; border:none;&quot; title=&quot;Friday - 03/26/2021&quot;>F</td><td class=&quot;ac&quot; style=&quot;width:20%; border:none;&quot; title=&quot;Sunday - 03/28/2021&quot;>S</td></tr></table>" scope="col"><span class="k-link"><a href="Attendance.aspx" title="Open Attendance Summary">Past 5 Days</a><table class="ac" style="border: none; width: 100px;"><tbody><tr style"border:="" none;"=""><td class="ac" style="width:20%; border:none;" title="Tuesday - 03/23/2021">T</td><td class="ac" style="width:20%; border:none;" title="Wednesday - 03/24/2021">W</td><td class="ac" style="width:20%; border:none;" title="Thursday - 03/25/2021">T</td><td class="ac" style="width:20%; border:none;" title="Friday - 03/26/2021">F</td><td class="ac" style="width:20%; border:none;" title="Sunday - 03/28/2021">S</td></tr></tbody></table></span></th><th class="k-header normalmode" data-field="Website" data-index="13" data-title="Website" scope="col"><span class="k-link">Website</span></th><th class="k-header" data-field="OnlineMeetingURL" data-index="14" data-title="Meeting" scope="col"><span class="k-link">Meeting</span></th><th class="k-header" data-field="OnlineMeetingNote" data-index="15" data-title="Online Meeting Note" scope="col" style="display:none"><span class="k-link">Online Meeting Note</span></th><th class="k-header normalmode" data-field="LastUpdated" data-index="16" data-title="Last<br ></th>Updated" scope="col"><span class="k-link">Last<br>Updated</span></th><th class="k-header" data-field="Source" data-index="17" data-title="Source" scope="col" style="display:none"><span class="k-link">Source</span></th><th class="k-header" data-field="TermGrouping" data-index="18" data-title="Term" scope="col" style="display:none"><span class="k-link">Term</span></th><th class="k-header" data-field="DistrictName" data-index="19" data-title="" scope="col" style="display:none"><span class="k-link">&nbsp;</span></th><th class="k-header" data-field="SchoolSort" data-index="20" data-title="" scope="col" style="display:none"><span class="k-link">&nbsp;</span></th></tr></thead><tbody role="rowgroup"><tr role="row" class="k-grouping-row"><td colspan="14" aria-expanded="true"><p class="k-reset"><a class="k-icon k-i-collapse" href="#" tabindex="-1" aria-label="Collapse"></a>Current Terms</p></td></tr><tr data-uid="125f1a0f-93ea-4ed6-8761-01ea2f4c5476" role="row"><td class="k-group-cell">&nbsp;</td><td style="text-align:center; padding:0;" role="gridcell"> 1 </td><td style="text-align:left;" class="normalmode" role="gridcell">AP Chemistry B</td><td style="text-align:left;" class="normalmode" role="gridcell">Bunch</td><td style="text-align:center;" class="normalmode" role="gridcell">710</td><td class="GridLink normalmode" role="gridcell"><a class="GradebookLink" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=7685082&amp;Term=S&amp;CDS=30736500000000&amp;SC=608">AP Chemistry B - Spring semester </a></td><td class="tinymodeTC" role="gridcell">AP Chemistry B<br>Teacher: Bunch Room: 710<br><a class="GradebookLink" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=7685082&amp;Term=S&amp;CDS=30736500000000&amp;SC=608">AP Chemistry B - Spring semester </a> </td><td style="display:none;text-align:center;" role="gridcell">32.6</td><td style="display:none;text-align:center;" role="gridcell"></td><td style="display:none;text-align:center;" role="gridcell">F</td><td style="text-align:center;" class="MarkandGrade" role="gridcell"> A- <span>(32.6%)</span> </td><td class="GridLink" role="gridcell"><a href="javascript:void(0)" class="gradebook-trend-click-hint" onclick="createScatterChart('7685082', 'AP Chemistry B', 'S');  return false;"><img src="images/blank.gif" title="Forecasted value of 29.69% compared to the average of the last four overall scores 14.6%   Click for Details" class="gradebook-trend-up" style="margin: 0px 0px -14px 0px; border: 0;">Details</a></td><td class="GridLink ac" style="padding: 0 !important;" role="gridcell"><a class="MissingAssignment" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=7685082&amp;Missing=1&amp;Term=S&amp;CDS=30736500000000&amp;SC=608"><span>15</span></a></td><td class="ac" role="gridcell"><table border="0" class="ac" style="box-sizing: content-box; width: 100px;"><tbody><tr><td class="ac" title="Monday - 03/22/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Tuesday - 03/23/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Wednesday - 03/24/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Thursday - 03/25/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Friday - 03/26/2021" style="width: 20%; border: none;">-</td></tr></tbody></table></td><td style="text-align:center;" class="normalmode" role="gridcell"></td><td style="text-align:center;" role="gridcell"></td><td class="OnlineMeetingNote" style="display:none" role="gridcell"></td><td style="text-align:center;" class="normalmode" role="gridcell">Mar 26</td><td style="display:none" role="gridcell"></td><td style="display:none" role="gridcell">Current Terms</td><td style="display:none" role="gridcell">Irvine Unified School District</td><td style="display:none" role="gridcell">_608</td></tr><tr class="k-alt" data-uid="a035f8aa-6a55-4ecd-affe-bccebbbfc8cc" role="row"><td class="k-group-cell">&nbsp;</td><td style="text-align:center; padding:0;" role="gridcell"> 2 </td><td style="text-align:left;" class="normalmode" role="gridcell">AP Psychology B</td><td style="text-align:left;" class="normalmode" role="gridcell">Jo,Tiffany</td><td style="text-align:center;" class="normalmode" role="gridcell">1022</td><td class="GridLink normalmode" role="gridcell"><a class="GradebookLink" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=2102810&amp;Term=S&amp;CDS=30736500000000&amp;SC=608">AP Psychology B - Spring semester </a></td><td class="tinymodeTC" role="gridcell">AP Psychology B<br>Teacher: Jo,Tiffany Room: 1022<br><a class="GradebookLink" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=2102810&amp;Term=S&amp;CDS=30736500000000&amp;SC=608">AP Psychology B - Spring semester </a> </td><td style="display:none;text-align:center;" role="gridcell">41.1</td><td style="display:none;text-align:center;" role="gridcell"></td><td style="display:none;text-align:center;" role="gridcell">F</td><td style="text-align:center;" class="MarkandGrade" role="gridcell"> F <span>(41.1%)</span> </td><td class="GridLink" role="gridcell"><a href="javascript:void(0)" class="gradebook-trend-click-hint" onclick="createScatterChart('2102810', 'AP Psychology B', 'S');  return false;"><img src="images/blank.gif" title="Forecasted value of 23.27% compared to the average of the last four overall scores 35.05%   Click for Details" class="gradebook-trend-down" style="margin: 0px 0px -14px 0px; border: 0;">Details</a></td><td class="GridLink ac" style="padding: 0 !important;" role="gridcell"><a class="MissingAssignment" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=2102810&amp;Missing=1&amp;Term=S&amp;CDS=30736500000000&amp;SC=608"><span>8</span></a></td><td class="ac" role="gridcell"><table border="0" class="ac" style="box-sizing: content-box; width: 100px;"><tbody><tr><td class="ac" title="Monday - 03/22/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Tuesday - 03/23/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Wednesday - 03/24/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Thursday - 03/25/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Friday - 03/26/2021" style="width: 20%; border: none;">-</td></tr></tbody></table></td><td style="text-align:center;" class="normalmode" role="gridcell"></td><td style="text-align:center;" role="gridcell"></td><td class="OnlineMeetingNote" style="display:none" role="gridcell"></td><td style="text-align:center;" class="normalmode" role="gridcell">Mar 26</td><td style="display:none" role="gridcell"></td><td style="display:none" role="gridcell">Current Terms</td><td style="display:none" role="gridcell">Irvine Unified School District</td><td style="display:none" role="gridcell">_608</td></tr><tr data-uid="13849ddd-5c35-42a8-bc59-54df6141e193" role="row"><td class="k-group-cell">&nbsp;</td><td style="text-align:center; padding:0;" role="gridcell"> 3 </td><td style="text-align:left;" class="normalmode" role="gridcell">AP Physics 1/2B</td><td style="text-align:left;" class="normalmode" role="gridcell">Smay, T</td><td style="text-align:center;" class="normalmode" role="gridcell">707</td><td class="GridLink normalmode" role="gridcell"><a class="GradebookLink" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=7739811&amp;Term=S&amp;CDS=30736500000000&amp;SC=608">AP Physics 1/2B - Spring semester </a></td><td class="tinymodeTC" role="gridcell">AP Physics 1/2B<br>Teacher: Smay, T Room: 707<br><a class="GradebookLink" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=7739811&amp;Term=S&amp;CDS=30736500000000&amp;SC=608">AP Physics 1/2B - Spring semester </a> </td><td style="display:none;text-align:center;" role="gridcell">29.0</td><td style="display:none;text-align:center;" role="gridcell"></td><td style="display:none;text-align:center;" role="gridcell">F</td><td style="text-align:center;" class="MarkandGrade" role="gridcell"> F <span>(29.0%)</span> </td><td class="GridLink" role="gridcell"><a href="javascript:void(0)" class="gradebook-trend-click-hint" onclick="createScatterChart('7739811', 'AP Physics 1/2B', 'S');  return false;"><img src="images/blank.gif" title="Forecasted value of 26.16% compared to the average of the last four overall scores 29.67%   Click for Details" class="gradebook-trend-down" style="margin: 0px 0px -14px 0px; border: 0;">Details</a></td><td class="GridLink ac" style="padding: 0 !important;" role="gridcell"><span class="NonMissingAssignment">0</span></td><td class="ac" role="gridcell"><table border="0" class="ac" style="box-sizing: content-box; width: 100px;"><tbody><tr><td class="ac" title="Monday - 03/22/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Tuesday - 03/23/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Wednesday - 03/24/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Thursday - 03/25/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Friday - 03/26/2021" style="width: 20%; border: none;">-</td></tr></tbody></table></td><td style="text-align:center;" class="normalmode" role="gridcell"></td><td style="text-align:center;" role="gridcell"></td><td class="OnlineMeetingNote" style="display:none" role="gridcell"></td><td style="text-align:center;" class="normalmode" role="gridcell">Mar 25</td><td style="display:none" role="gridcell"></td><td style="display:none" role="gridcell">Current Terms</td><td style="display:none" role="gridcell">Irvine Unified School District</td><td style="display:none" role="gridcell">_608</td></tr><tr class="k-alt" data-uid="652df82d-e9ac-469a-a761-92436f1346ca" role="row"><td class="k-group-cell">&nbsp;</td><td style="text-align:center; padding:0;" role="gridcell"> 4 </td><td style="text-align:left;" class="normalmode" role="gridcell">AP Calc BC B</td><td style="text-align:left;" class="normalmode" role="gridcell">Davies</td><td style="text-align:center;" class="normalmode" role="gridcell">GYM</td><td class="GridLink normalmode" role="gridcell"><a class="GradebookLink" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=129263&amp;Term=S&amp;CDS=30736500000000&amp;SC=608">AP Calc BC B - Spring semester </a></td><td class="tinymodeTC" role="gridcell">AP Calc BC B<br>Teacher: Davies Room: GYM<br><a class="GradebookLink" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=129263&amp;Term=S&amp;CDS=30736500000000&amp;SC=608">AP Calc BC B - Spring semester </a> </td><td style="display:none;text-align:center;" role="gridcell">58.8</td><td style="display:none;text-align:center;" role="gridcell"></td><td style="display:none;text-align:center;" role="gridcell">F</td><td style="text-align:center;" class="MarkandGrade" role="gridcell"> F <span>(58.8%)</span> </td><td class="GridLink" role="gridcell"><a href="javascript:void(0)" class="gradebook-trend-click-hint" onclick="createScatterChart('129263', 'AP Calc BC B', 'S');  return false;"><img src="images/blank.gif" title="Forecasted value of 66.79% compared to the average of the last four overall scores 58.05%   Click for Details" class="gradebook-trend-up" style="margin: 0px 0px -14px 0px; border: 0;">Details</a></td><td class="GridLink ac" style="padding: 0 !important;" role="gridcell"><a class="MissingAssignment" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=129263&amp;Missing=1&amp;Term=S&amp;CDS=30736500000000&amp;SC=608"><span>7</span></a></td><td class="ac" role="gridcell"><table border="0" class="ac" style="box-sizing: content-box; width: 100px;"><tbody><tr><td class="ac" title="Monday - 03/22/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Tuesday - 03/23/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Wednesday - 03/24/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Thursday - 03/25/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Friday - 03/26/2021" style="width: 20%; border: none;">-</td></tr></tbody></table></td><td style="text-align:center;" class="normalmode" role="gridcell"></td><td style="text-align:center;" role="gridcell"></td><td class="OnlineMeetingNote" style="display:none" role="gridcell"></td><td style="text-align:center;" class="normalmode" role="gridcell">Mar 26</td><td style="display:none" role="gridcell"></td><td style="display:none" role="gridcell">Current Terms</td><td style="display:none" role="gridcell">Irvine Unified School District</td><td style="display:none" role="gridcell">_608</td></tr><tr data-uid="9475ecdb-302e-45ce-bde9-3e4c1ab88b19" role="row"><td class="k-group-cell">&nbsp;</td><td style="text-align:center; padding:0;" role="gridcell"> 5 </td><td style="text-align:left;" class="normalmode" role="gridcell">AP ComSciPrin B</td><td style="text-align:left;" class="normalmode" role="gridcell">Kinney</td><td style="text-align:center;" class="normalmode" role="gridcell">509B</td><td class="GridLink normalmode" role="gridcell"><a class="GradebookLink" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=1688416&amp;Term=S&amp;CDS=30736500000000&amp;SC=608">AP CSP &amp; App Dev - Spring semester </a></td><td class="tinymodeTC" role="gridcell">AP ComSciPrin B<br>Teacher: Kinney Room: 509B<br><a class="GradebookLink" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=1688416&amp;Term=S&amp;CDS=30736500000000&amp;SC=608">AP CSP &amp; App Dev - Spring semester </a> </td><td style="display:none;text-align:center;" role="gridcell">61.3</td><td style="display:none;text-align:center;" role="gridcell"></td><td style="display:none;text-align:center;" role="gridcell">D-</td><td style="text-align:center;" class="MarkandGrade" role="gridcell"> D- <span>(61.3%)</span> </td><td class="GridLink" role="gridcell"></td><td class="GridLink ac" style="padding: 0 !important;" role="gridcell"><a class="MissingAssignment" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=1688416&amp;Missing=1&amp;Term=S&amp;CDS=30736500000000&amp;SC=608"><span>6</span></a></td><td class="ac" role="gridcell"><table border="0" class="ac" style="box-sizing: content-box; width: 100px;"><tbody><tr><td class="ac" title="Monday - 03/22/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Tuesday - 03/23/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Wednesday - 03/24/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Thursday - 03/25/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Friday - 03/26/2021" style="width: 20%; border: none;">-</td></tr></tbody></table></td><td style="text-align:center;" class="normalmode" role="gridcell"></td><td style="text-align:center;" role="gridcell"></td><td class="OnlineMeetingNote" style="display:none" role="gridcell"></td><td style="text-align:center;" class="normalmode" role="gridcell">Mar 26</td><td style="display:none" role="gridcell"></td><td style="display:none" role="gridcell">Current Terms</td><td style="display:none" role="gridcell">Irvine Unified School District</td><td style="display:none" role="gridcell">_608</td></tr><tr class="k-alt" data-uid="2b53c6f0-2422-4190-a042-5185b1aa6aea" role="row"><td class="k-group-cell">&nbsp;</td><td style="text-align:center; padding:0;" role="gridcell"> 6 </td><td style="text-align:left;" class="normalmode" role="gridcell">AP Eng Lang B</td><td style="text-align:left;" class="normalmode" role="gridcell">Kynor</td><td style="text-align:center;" class="normalmode" role="gridcell">218</td><td class="GridLink normalmode" role="gridcell"><a class="GradebookLink" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=7447281&amp;Term=S&amp;CDS=30736500000000&amp;SC=608">AP Eng Lang B - Spring semester </a></td><td class="tinymodeTC" role="gridcell">AP Eng Lang B<br>Teacher: Kynor Room: 218<br><a class="GradebookLink" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=7447281&amp;Term=S&amp;CDS=30736500000000&amp;SC=608">AP Eng Lang B - Spring semester </a> </td><td style="display:none;text-align:center;" role="gridcell">55.5</td><td style="display:none;text-align:center;" role="gridcell"></td><td style="display:none;text-align:center;" role="gridcell">F</td><td style="text-align:center;" class="MarkandGrade" role="gridcell"> F <span>(55.5%)</span> </td><td class="GridLink" role="gridcell"><a href="javascript:void(0)" class="gradebook-trend-click-hint" onclick="createScatterChart('7447281', 'AP Eng Lang B', 'S');  return false;"><img src="images/blank.gif" title="Forecasted value of 64.49% compared to the average of the last four overall scores 45.28%   Click for Details" class="gradebook-trend-up" style="margin: 0px 0px -14px 0px; border: 0;">Details</a></td><td class="GridLink ac" style="padding: 0 !important;" role="gridcell"><a class="MissingAssignment" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=7447281&amp;Missing=1&amp;Term=S&amp;CDS=30736500000000&amp;SC=608"><span>7</span></a></td><td class="ac" role="gridcell"><table border="0" class="ac" style="box-sizing: content-box; width: 100px;"><tbody><tr><td class="ac" title="Monday - 03/22/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Tuesday - 03/23/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Wednesday - 03/24/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Thursday - 03/25/2021" style="width: 20%; border: none;">J</td><td class="ac" title="Friday - 03/26/2021" style="width: 20%; border: none;">-</td></tr></tbody></table></td><td style="text-align:center;" class="normalmode" role="gridcell"></td><td style="text-align:center;" role="gridcell"></td><td class="OnlineMeetingNote" style="display:none" role="gridcell"></td><td style="text-align:center;" class="normalmode" role="gridcell">Mar 11</td><td style="display:none" role="gridcell"></td><td style="display:none" role="gridcell">Current Terms</td><td style="display:none" role="gridcell">Irvine Unified School District</td><td style="display:none" role="gridcell">_608</td></tr><tr data-uid="6f43bae0-345a-4d86-99d0-0c479435ef50" role="row"><td class="k-group-cell">&nbsp;</td><td style="text-align:center; padding:0;" role="gridcell"> 9 </td><td style="text-align:left;" class="normalmode" role="gridcell">Homeroom</td><td style="text-align:left;" class="normalmode" role="gridcell">Smay, T</td><td style="text-align:center;" class="normalmode" role="gridcell">707</td><td class="GridLink normalmode" role="gridcell"></td><td class="tinymodeTC" role="gridcell">Homeroom<br>Teacher: Smay, T Room: 707<br> </td><td style="display:none;text-align:center;" role="gridcell"></td><td style="display:none;text-align:center;" role="gridcell"></td><td style="display:none;text-align:center;" role="gridcell"></td><td style="text-align:center;" class="MarkandGrade" role="gridcell">  </td><td class="GridLink" role="gridcell"></td><td class="GridLink ac" style="padding: 0 !important;" role="gridcell"></td><td class="ac" role="gridcell"><table border="0" class="ac" style="box-sizing: content-box; width: 100px;"><tbody><tr><td class="ac" title="Monday - 03/22/2021" style="width: 20%; border: none;">J</td><td class="ac" title="Tuesday - 03/23/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Wednesday - 03/24/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Thursday - 03/25/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Friday - 03/26/2021" style="width: 20%; border: none;">-</td></tr></tbody></table></td><td style="text-align:center;" class="normalmode" role="gridcell"></td><td style="text-align:center;" role="gridcell"></td><td class="OnlineMeetingNote" style="display:none" role="gridcell"></td><td style="text-align:center;" class="normalmode" role="gridcell"></td><td style="display:none" role="gridcell"></td><td style="display:none" role="gridcell">Current Terms</td><td style="display:none" role="gridcell">Irvine Unified School District</td><td style="display:none" role="gridcell">_608</td></tr><tr role="row" class="k-grouping-row"><td colspan="14" aria-expanded="true"><p class="k-reset"><a class="k-icon k-i-collapse" href="#" tabindex="-1" aria-label="Collapse"></a>Prior Terms</p></td></tr><tr data-uid="093e1413-27a9-46cb-b7c3-676972172a04" role="row"><td class="k-group-cell">&nbsp;</td><td style="text-align:center; padding:0;" role="gridcell"> 1 </td><td style="text-align:left;" class="normalmode" role="gridcell"></td><td style="text-align:left;" class="normalmode" role="gridcell">Bunch</td><td style="text-align:center;" class="normalmode" role="gridcell"></td><td class="GridLink normalmode" role="gridcell"><a class="GradebookLink" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=1790555&amp;Term=F&amp;CDS=30736500000000&amp;SC=608">AP Chemistry Period 1 - Fall semester </a></td><td class="tinymodeTC" role="gridcell"><br>Teacher: Bunch Room: <br><a class="GradebookLink" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=1790555&amp;Term=F&amp;CDS=30736500000000&amp;SC=608">AP Chemistry Period 1 - Fall semester </a> </td><td style="display:none;text-align:center;" role="gridcell">66.2</td><td style="display:none;text-align:center;" role="gridcell"></td><td style="display:none;text-align:center;" role="gridcell">D</td><td style="text-align:center;" class="MarkandGrade" role="gridcell"> D <span>(66.2%)</span> </td><td class="GridLink" role="gridcell"><a href="javascript:void(0)" class="gradebook-trend-click-hint" onclick="createScatterChart('1790555', 'AP Chemistry Period 1', 'F');  return false;"><img src="images/blank.gif" title="Forecasted value of 68.22% compared to the average of the last four overall scores 70.18%   Click for Details" class="gradebook-trend-down" style="margin: 0px 0px -14px 0px; border: 0;">Details</a></td><td class="GridLink ac" style="padding: 0 !important;" role="gridcell"><a class="MissingAssignment" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=1790555&amp;Missing=1&amp;Term=F&amp;CDS=30736500000000&amp;SC=608"><span>12</span></a></td><td class="ac" role="gridcell"><table border="0" class="ac" style="box-sizing: content-box; width: 100px;"><tbody><tr><td class="ac" title="Monday - 03/22/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Tuesday - 03/23/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Wednesday - 03/24/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Thursday - 03/25/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Friday - 03/26/2021" style="width: 20%; border: none;">-</td></tr></tbody></table></td><td style="text-align:center;" class="normalmode" role="gridcell"></td><td style="text-align:center;" role="gridcell"></td><td class="OnlineMeetingNote" style="display:none" role="gridcell"></td><td style="text-align:center;" class="normalmode" role="gridcell">Jan 18</td><td style="display:none" role="gridcell"></td><td style="display:none" role="gridcell">Prior Terms</td><td style="display:none" role="gridcell">Irvine Unified School District</td><td style="display:none" role="gridcell">_608</td></tr><tr class="k-alt" data-uid="97e69290-1b00-41ab-96b4-a26cbf2e2625" role="row"><td class="k-group-cell">&nbsp;</td><td style="text-align:center; padding:0;" role="gridcell"> 2 </td><td style="text-align:left;" class="normalmode" role="gridcell"></td><td style="text-align:left;" class="normalmode" role="gridcell">Jo,Tiffany</td><td style="text-align:center;" class="normalmode" role="gridcell"></td><td class="GridLink normalmode" role="gridcell"><a class="GradebookLink" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=3784931&amp;Term=F&amp;CDS=30736500000000&amp;SC=608">AP Psychology A - Fall semester </a></td><td class="tinymodeTC" role="gridcell"><br>Teacher: Jo,Tiffany Room: <br><a class="GradebookLink" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=3784931&amp;Term=F&amp;CDS=30736500000000&amp;SC=608">AP Psychology A - Fall semester </a> </td><td style="display:none;text-align:center;" role="gridcell">80.1</td><td style="display:none;text-align:center;" role="gridcell"></td><td style="display:none;text-align:center;" role="gridcell">B-</td><td style="text-align:center;" class="MarkandGrade" role="gridcell"> B- <span>(80.1%)</span> </td><td class="GridLink" role="gridcell"><a href="javascript:void(0)" class="gradebook-trend-click-hint" onclick="createScatterChart('3784931', 'AP Psychology A', 'F');  return false;"><img src="images/blank.gif" title="Forecasted value of 84.01% compared to the average of the last four overall scores 83.45%   Click for Details" class="gradebook-trend-same" style="margin: 0px 0px -14px 0px; border: 0;">Details</a></td><td class="GridLink ac" style="padding: 0 !important;" role="gridcell"><a class="MissingAssignment" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=3784931&amp;Missing=1&amp;Term=F&amp;CDS=30736500000000&amp;SC=608"><span>5</span></a></td><td class="ac" role="gridcell"><table border="0" class="ac" style="box-sizing: content-box; width: 100px;"><tbody><tr><td class="ac" title="Monday - 03/22/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Tuesday - 03/23/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Wednesday - 03/24/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Thursday - 03/25/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Friday - 03/26/2021" style="width: 20%; border: none;">-</td></tr></tbody></table></td><td style="text-align:center;" class="normalmode" role="gridcell"></td><td style="text-align:center;" role="gridcell"></td><td class="OnlineMeetingNote" style="display:none" role="gridcell"></td><td style="text-align:center;" class="normalmode" role="gridcell">Jan 15</td><td style="display:none" role="gridcell"></td><td style="display:none" role="gridcell">Prior Terms</td><td style="display:none" role="gridcell">Irvine Unified School District</td><td style="display:none" role="gridcell">_608</td></tr><tr data-uid="582e2136-937c-4b2a-9a2c-cc0dd3203e0b" role="row"><td class="k-group-cell">&nbsp;</td><td style="text-align:center; padding:0;" role="gridcell"> 3 </td><td style="text-align:left;" class="normalmode" role="gridcell"></td><td style="text-align:left;" class="normalmode" role="gridcell">Smay, T</td><td style="text-align:center;" class="normalmode" role="gridcell"></td><td class="GridLink normalmode" role="gridcell"><a class="GradebookLink" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=5214286&amp;Term=F&amp;CDS=30736500000000&amp;SC=608">AP Physics 1/2A - Fall semester </a></td><td class="tinymodeTC" role="gridcell"><br>Teacher: Smay, T Room: <br><a class="GradebookLink" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=5214286&amp;Term=F&amp;CDS=30736500000000&amp;SC=608">AP Physics 1/2A - Fall semester </a> </td><td style="display:none;text-align:center;" role="gridcell">71.6</td><td style="display:none;text-align:center;" role="gridcell"></td><td style="display:none;text-align:center;" role="gridcell">C-</td><td style="text-align:center;" class="MarkandGrade" role="gridcell"> C- <span>(71.6%)</span> </td><td class="GridLink" role="gridcell"><a href="javascript:void(0)" class="gradebook-trend-click-hint" onclick="createScatterChart('5214286', 'AP Physics 1/2A', 'F');  return false;"><img src="images/blank.gif" title="Forecasted value of 70.28% compared to the average of the last four overall scores 70.16%   Click for Details" class="gradebook-trend-same" style="margin: 0px 0px -14px 0px; border: 0;">Details</a></td><td class="GridLink ac" style="padding: 0 !important;" role="gridcell"><span class="NonMissingAssignment">0</span></td><td class="ac" role="gridcell"><table border="0" class="ac" style="box-sizing: content-box; width: 100px;"><tbody><tr><td class="ac" title="Monday - 03/22/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Tuesday - 03/23/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Wednesday - 03/24/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Thursday - 03/25/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Friday - 03/26/2021" style="width: 20%; border: none;">-</td></tr></tbody></table></td><td style="text-align:center;" class="normalmode" role="gridcell"></td><td style="text-align:center;" role="gridcell"></td><td class="OnlineMeetingNote" style="display:none" role="gridcell"></td><td style="text-align:center;" class="normalmode" role="gridcell">Jan 15</td><td style="display:none" role="gridcell"></td><td style="display:none" role="gridcell">Prior Terms</td><td style="display:none" role="gridcell">Irvine Unified School District</td><td style="display:none" role="gridcell">_608</td></tr><tr class="k-alt" data-uid="13c8f3eb-f9f2-4fb9-b5fe-9159851dc5da" role="row"><td class="k-group-cell">&nbsp;</td><td style="text-align:center; padding:0;" role="gridcell"> 4 </td><td style="text-align:left;" class="normalmode" role="gridcell"></td><td style="text-align:left;" class="normalmode" role="gridcell">Kurdziel</td><td style="text-align:center;" class="normalmode" role="gridcell"></td><td class="GridLink normalmode" role="gridcell"><a class="GradebookLink" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=9212184&amp;Term=F&amp;CDS=30736500000000&amp;SC=608">AP Calculus BC Period 4 - Fall semester </a></td><td class="tinymodeTC" role="gridcell"><br>Teacher: Kurdziel Room: <br><a class="GradebookLink" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=9212184&amp;Term=F&amp;CDS=30736500000000&amp;SC=608">AP Calculus BC Period 4 - Fall semester </a> </td><td style="display:none;text-align:center;" role="gridcell">62.9</td><td style="display:none;text-align:center;" role="gridcell"></td><td style="display:none;text-align:center;" role="gridcell">D</td><td style="text-align:center;" class="MarkandGrade" role="gridcell"> D <span>(62.9%)</span> </td><td class="GridLink" role="gridcell"><a href="javascript:void(0)" class="gradebook-trend-click-hint" onclick="createScatterChart('9212184', 'AP Calculus BC Period 4', 'F');  return false;"><img src="images/blank.gif" title="Forecasted value of 62.11% compared to the average of the last four overall scores 63.18%   Click for Details" class="gradebook-trend-down" style="margin: 0px 0px -14px 0px; border: 0;">Details</a></td><td class="GridLink ac" style="padding: 0 !important;" role="gridcell"><span class="NonMissingAssignment">0</span></td><td class="ac" role="gridcell"><table border="0" class="ac" style="box-sizing: content-box; width: 100px;"><tbody><tr><td class="ac" title="Monday - 03/22/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Tuesday - 03/23/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Wednesday - 03/24/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Thursday - 03/25/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Friday - 03/26/2021" style="width: 20%; border: none;">-</td></tr></tbody></table></td><td style="text-align:center;" class="normalmode" role="gridcell"></td><td style="text-align:center;" role="gridcell"></td><td class="OnlineMeetingNote" style="display:none" role="gridcell"></td><td style="text-align:center;" class="normalmode" role="gridcell">Jan 07</td><td style="display:none" role="gridcell"></td><td style="display:none" role="gridcell">Prior Terms</td><td style="display:none" role="gridcell">Irvine Unified School District</td><td style="display:none" role="gridcell">_608</td></tr><tr data-uid="04c3da09-eff4-4306-a628-14e26ca1c534" role="row"><td class="k-group-cell">&nbsp;</td><td style="text-align:center; padding:0;" role="gridcell"> 5 </td><td style="text-align:left;" class="normalmode" role="gridcell"></td><td style="text-align:left;" class="normalmode" role="gridcell">Kinney</td><td style="text-align:center;" class="normalmode" role="gridcell"></td><td class="GridLink normalmode" role="gridcell"><a class="GradebookLink" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=3432731&amp;Term=F&amp;CDS=30736500000000&amp;SC=608">AP CSP - Fall semester </a></td><td class="tinymodeTC" role="gridcell"><br>Teacher: Kinney Room: <br><a class="GradebookLink" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=3432731&amp;Term=F&amp;CDS=30736500000000&amp;SC=608">AP CSP - Fall semester </a> </td><td style="display:none;text-align:center;" role="gridcell">99.0</td><td style="display:none;text-align:center;" role="gridcell"></td><td style="display:none;text-align:center;" role="gridcell">A+</td><td style="text-align:center;" class="MarkandGrade" role="gridcell"> A+ <span>(99.0%)</span> </td><td class="GridLink" role="gridcell"><a href="javascript:void(0)" class="gradebook-trend-click-hint" onclick="createScatterChart('3432731', 'AP CSP', 'F');  return false;"><img src="images/blank.gif" title="Forecasted value of 98.69% compared to the average of the last four overall scores 98.85%   Click for Details" class="gradebook-trend-same" style="margin: 0px 0px -14px 0px; border: 0;">Details</a></td><td class="GridLink ac" style="padding: 0 !important;" role="gridcell"><a class="MissingAssignment" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=3432731&amp;Missing=1&amp;Term=F&amp;CDS=30736500000000&amp;SC=608"><span>1</span></a></td><td class="ac" role="gridcell"><table border="0" class="ac" style="box-sizing: content-box; width: 100px;"><tbody><tr><td class="ac" title="Monday - 03/22/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Tuesday - 03/23/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Wednesday - 03/24/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Thursday - 03/25/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Friday - 03/26/2021" style="width: 20%; border: none;">-</td></tr></tbody></table></td><td style="text-align:center;" class="normalmode" role="gridcell"></td><td style="text-align:center;" role="gridcell"></td><td class="OnlineMeetingNote" style="display:none" role="gridcell"></td><td style="text-align:center;" class="normalmode" role="gridcell">Jan 12</td><td style="display:none" role="gridcell"></td><td style="display:none" role="gridcell">Prior Terms</td><td style="display:none" role="gridcell">Irvine Unified School District</td><td style="display:none" role="gridcell">_608</td></tr><tr class="k-alt" data-uid="20997f6b-3c4d-4177-9e82-d8fbd6bcc087" role="row"><td class="k-group-cell">&nbsp;</td><td style="text-align:center; padding:0;" role="gridcell"> 6 </td><td style="text-align:left;" class="normalmode" role="gridcell"></td><td style="text-align:left;" class="normalmode" role="gridcell">Kynor</td><td style="text-align:center;" class="normalmode" role="gridcell"></td><td class="GridLink normalmode" role="gridcell"><a class="GradebookLink" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=9808390&amp;Term=F&amp;CDS=30736500000000&amp;SC=608">AP Eng Lang A - Fall semester </a></td><td class="tinymodeTC" role="gridcell"><br>Teacher: Kynor Room: <br><a class="GradebookLink" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=9808390&amp;Term=F&amp;CDS=30736500000000&amp;SC=608">AP Eng Lang A - Fall semester </a> </td><td style="display:none;text-align:center;" role="gridcell">80.0</td><td style="display:none;text-align:center;" role="gridcell"></td><td style="display:none;text-align:center;" role="gridcell">B-</td><td style="text-align:center;" class="MarkandGrade" role="gridcell"> B- <span>(80.0%)</span> </td><td class="GridLink" role="gridcell"><a href="javascript:void(0)" class="gradebook-trend-click-hint" onclick="createScatterChart('9808390', 'AP Eng Lang A', 'F');  return false;"><img src="images/blank.gif" title="Forecasted value of 103.26% compared to the average of the last four overall scores 75.44%   Click for Details" class="gradebook-trend-up" style="margin: 0px 0px -14px 0px; border: 0;">Details</a></td><td class="GridLink ac" style="padding: 0 !important;" role="gridcell"><a class="MissingAssignment" href="Widgets/ClassSummary/RedirectToGradebook?GradebookNumber=9808390&amp;Missing=1&amp;Term=F&amp;CDS=30736500000000&amp;SC=608"><span>1</span></a></td><td class="ac" role="gridcell"><table border="0" class="ac" style="box-sizing: content-box; width: 100px;"><tbody><tr><td class="ac" title="Monday - 03/22/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Tuesday - 03/23/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Wednesday - 03/24/2021" style="width: 20%; border: none;">-</td><td class="ac" title="Thursday - 03/25/2021" style="width: 20%; border: none;">J</td><td class="ac" title="Friday - 03/26/2021" style="width: 20%; border: none;">-</td></tr></tbody></table></td><td style="text-align:center;" class="normalmode" role="gridcell"></td><td style="text-align:center;" role="gridcell"></td><td class="OnlineMeetingNote" style="display:none" role="gridcell"></td><td style="text-align:center;" class="normalmode" role="gridcell">Jan 15</td><td style="display:none" role="gridcell"></td><td style="display:none" role="gridcell">Prior Terms</td><td style="display:none" role="gridcell">Irvine Unified School District</td><td style="display:none" role="gridcell">_608</td></tr></tbody></table></div>
  
  
                      </div>
                  </td>
              </tr>
  
          </tbody></table>
  
          <input data-val="true" data-val-required="The ConnectedToGoogle field is required." id="ConnectedToGoogle" name="ConnectedToGoogle" type="hidden" value="False">
      </div>
  
      <script>
          $(function () {
              $('[data-toggle="popover"]').popover()
          })
  
          function GetSchoolName(data) {
              var dataItem = $("#gridClasses").data("kendoGrid").dataSource.data().find(function (item) {
                  return item.SchoolSort === data.value;
              });
  
              return dataItem.SchoolName;
          }
  
          function onClassSummaryDataBound() {
              setTimeout(function () {
                  refreshgrid();
              }, 100);
          }
      </script>
  
  
  
      <script>jQuery(function(){jQuery("#gridClasses").kendoGrid({"dataBound":onClassSummaryDataBound,"columns":[{"title":"Per","attributes":{"style":"text-align:center; padding:0;"},"headerAttributes":{"data-field":"PeriodTitle","data-title":"Per"},"template":"# if (data.Block \u003e 1) { # #=data.Period# - #=getUpperPeriodRange(data.Period, data.Block)# # } else { # #=data.PeriodTitle# # } #","field":"PeriodTitle","encoded":true},{"title":"Course","attributes":{"style":"text-align:left;","class":"normalmode"},"headerAttributes":{"class":"normalmode","data-field":"CourseNumberAndName","data-title":"Course"},"encoded":false,"field":"CourseNumberAndName"},{"title":"Teacher","attributes":{"style":"text-align:left;","class":"normalmode"},"headerAttributes":{"class":"normalmode","data-field":"TeacherName","data-title":"Teacher"},"encoded":false,"field":"TeacherName"},{"title":"Room","attributes":{"style":"text-align:center;","class":"normalmode"},"headerAttributes":{"class":"normalmode","data-field":"RoomNumber","data-title":"Room"},"field":"RoomNumber","encoded":true},{"title":"Gradebook","attributes":{"class":"GridLink normalmode"},"headerAttributes":{"class":"normalmode","data-field":"Gradebook","data-title":"Gradebook"},"encoded":false,"field":"Gradebook"},{"title":"Details","attributes":{"class":"tinymodeTC"},"headerAttributes":{"class":"tinymodeTC","data-field":"Gradebook","data-title":"Details"},"template":"#=data.CourseName#\u003cbr\u003eTeacher: #=data.TeacherName# Room: #=data.RoomNumber#\u003cbr\u003e#=data.Gradebook# # if (data.Website.length \u003e 1) { # #=data.Website# # } #","encoded":false,"field":"Gradebook"},{"title":"%","attributes":{"style":"text-align:center;"},"headerAttributes":{"data-field":"Percent","data-title":"%"},"hidden":true,"field":"Percent","encoded":true},{"title":"Avg","attributes":{"style":"text-align:center;"},"headerAttributes":{"data-field":"Average","data-title":"Avg"},"hidden":true,"field":"Average","encoded":true},{"title":"Mark","attributes":{"style":"text-align:center;"},"headerAttributes":{"data-field":"CurrentMark","data-title":"Mark"},"hidden":true,"field":"CurrentMark","encoded":true},{"title":"Mark","attributes":{"style":"text-align:center;","class":"MarkandGrade"},"headerAttributes":{"data-field":"CurrentMarkAndScore","data-title":"Mark"},"template":"# if (data.CurrentPercentOrAverage.length \u003e 1) { # #=data.CurrentMark# \u003cspan\u003e(#=data.CurrentPercentOrAverage#)\u003c/span\u003e # } else { # #=data.CurrentMark# # } #","encoded":false,"field":"CurrentMarkAndScore"},{"title":"Trend","attributes":{"class":"GridLink"},"headerAttributes":{"data-field":"Trend","data-title":"Trend"},"encoded":false,"field":"Trend"},{"title":"Missing Assignment","attributes":{"class":"GridLink ac","style":"padding: 0 !important;"},"headerAttributes":{"data-field":"MissingAssignments","data-title":"Missing Assignment"},"width":"90px","encoded":false,"field":"MissingAssignments"},{"title":"\u003ca href=\"Attendance.aspx\"title=\"Open Attendance Summary\"\u003ePast 5 Days\u003c/a\u003e\u003ctable class=\"ac\" style=\"border: none; width: 100px;\"\u003e\u003ctr style\"border: none;\"\u003e\u003ctd class=\"ac\" style=\"width:20%; border:none;\" title=\"Tuesday - 03/23/2021\"\u003eT\u003c/td\u003e\u003ctd class=\"ac\" style=\"width:20%; border:none;\" title=\"Wednesday - 03/24/2021\"\u003eW\u003c/td\u003e\u003ctd class=\"ac\" style=\"width:20%; border:none;\" title=\"Thursday - 03/25/2021\"\u003eT\u003c/td\u003e\u003ctd class=\"ac\" style=\"width:20%; border:none;\" title=\"Friday - 03/26/2021\"\u003eF\u003c/td\u003e\u003ctd class=\"ac\" style=\"width:20%; border:none;\" title=\"Sunday - 03/28/2021\"\u003eS\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e","attributes":{"class":"ac"},"headerAttributes":{"data-field":"LastATT","data-title":"\u0026lt;a href=\u0026quot;Attendance.aspx\u0026quot;title=\u0026quot;Open Attendance Summary\u0026quot;\u003ePast 5 Days\u0026lt;/a\u003e\u0026lt;table class=\u0026quot;ac\u0026quot; style=\u0026quot;border: none; width: 100px;\u0026quot;\u003e\u0026lt;tr style\u0026quot;border: none;\u0026quot;\u003e\u0026lt;td class=\u0026quot;ac\u0026quot; style=\u0026quot;width:20%; border:none;\u0026quot; title=\u0026quot;Tuesday - 03/23/2021\u0026quot;\u003eT\u0026lt;/td\u003e\u0026lt;td class=\u0026quot;ac\u0026quot; style=\u0026quot;width:20%; border:none;\u0026quot; title=\u0026quot;Wednesday - 03/24/2021\u0026quot;\u003eW\u0026lt;/td\u003e\u0026lt;td class=\u0026quot;ac\u0026quot; style=\u0026quot;width:20%; border:none;\u0026quot; title=\u0026quot;Thursday - 03/25/2021\u0026quot;\u003eT\u0026lt;/td\u003e\u0026lt;td class=\u0026quot;ac\u0026quot; style=\u0026quot;width:20%; border:none;\u0026quot; title=\u0026quot;Friday - 03/26/2021\u0026quot;\u003eF\u0026lt;/td\u003e\u0026lt;td class=\u0026quot;ac\u0026quot; style=\u0026quot;width:20%; border:none;\u0026quot; title=\u0026quot;Sunday - 03/28/2021\u0026quot;\u003eS\u0026lt;/td\u003e\u0026lt;/tr\u003e\u0026lt;/table\u003e"},"width":"100px","encoded":false,"field":"LastATT"},{"title":"Website","attributes":{"style":"text-align:center;","class":"normalmode"},"headerAttributes":{"class":"normalmode","data-field":"Website","data-title":"Website"},"width":"120px","encoded":false,"field":"Website"},{"title":"Meeting","attributes":{"style":"text-align:center;"},"headerAttributes":{"data-field":"OnlineMeetingURL","data-title":"Meeting"},"width":"100px","encoded":false,"field":"OnlineMeetingURL"},{"title":"Online Meeting Note","attributes":{"class":"OnlineMeetingNote"},"headerAttributes":{"data-field":"OnlineMeetingNote","data-title":"Online Meeting Note"},"hidden":true,"field":"OnlineMeetingNote","encoded":true},{"title":"Last\u003cbr /\u003eUpdated","attributes":{"style":"text-align:center;","class":"normalmode"},"headerAttributes":{"class":"normalmode","data-field":"LastUpdated","data-title":"Last\u0026lt;br /\u003eUpdated"},"field":"LastUpdated","encoded":true},{"title":"Source","headerAttributes":{"data-field":"Source","data-title":"Source"},"hidden":true,"field":"Source","encoded":true},{"title":"Term","headerAttributes":{"data-field":"TermGrouping","data-title":"Term"},"hidden":true,"field":"TermGrouping","encoded":true,"groupHeaderTemplate":"#=value#"},{"headerAttributes":{"data-field":"DistrictName","data-title":""},"hidden":true,"field":"DistrictName","encoded":true,"groupHeaderTemplate":"#=value#"},{"headerAttributes":{"data-field":"SchoolSort","data-title":""},"hidden":true,"field":"SchoolSort","encoded":true,"groupHeaderTemplate":"#=GetSchoolName(data)#"}],"scrollable":false,"messages":{"noRecords":"No records available."},"autoBind":false,"dataSource":{"type":(function(){if(kendo.data.transports['aspnetmvc-server']){return 'aspnetmvc-server';} else{throw new Error('The kendo.aspnetmvc.min.js script is not included.');}})(),"transport":{"read":{"url":""},"prefix":"gridClasses-"},"serverPaging":true,"serverSorting":true,"serverFiltering":true,"serverGrouping":true,"serverAggregates":true,"filter":[],"schema":{"data":"Data","total":"Total","errors":"Errors","model":{"fields":{"Period":{"type":"number"},"RoomNumber":{"type":"string"},"CourseNumber":{"type":"string"},"CourseName":{"type":"string"},"CourseNumberAndName":{"type":"string"},"SectionNumber":{"type":"string"},"GradebookName":{"type":"string"},"GradebookNumber":{"type":"string"},"TeacherName":{"type":"string"},"Gradebook":{"type":"string"},"Percent":{"type":"string"},"Average":{"type":"string"},"CurrentMark":{"type":"string"},"CurrentMarkAndScore":{"type":"string"},"CurrentPercentOrAverage":{"type":"string"},"DoingMinMax":{"type":"boolean"},"Trend":{"type":"string"},"MissingAssignments":{"type":"string"},"NumMissingAssignments":{"type":"number"},"LastATT":{"type":"string"},"LastUpdated":{"type":"string"},"TotalStudents":{"type":"string"},"Website":{"type":"string"},"AccessCode":{"type":"string"},"Source":{"type":"string"},"Term":{"type":"string"},"TermGrouping":{"type":"string"},"SchoolNumber":{"type":"number"},"SchoolName":{"type":"string"},"SchoolSort":{"type":"string"},"DistrictCDS":{"type":"string"},"DistrictName":{"type":"string"},"EDITABLE":{"type":"number"},"Block":{"type":"number"},"DoingRubric":{"type":"boolean"},"TermCode":{"type":"string"},"OnlineMeetingURL":{"type":"string"},"OnlineMeetingAccessCode":{"type":"string"},"OnlineMeetingSource":{"type":"string"},"OnlineMeetingPhoneNumber":{"type":"string"},"OnlineMeetingNote":{"type":"string"},"PeriodTitle":{"type":"string"},"FlexPeriodStartTime":{"type":"date"},"FlexPeriodEndTime":{"type":"date"},"Students":{"type":"object"}}}}}});});</script></div>
          
          
                          </div></section>
                                          
  
                          <section class="item muuri-item muuri-item-shown" id="iParentMessages" data-id="15" style="left: 0px; top: 0px; transform: translateX(0px) translateY(4126px); display: block; touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
                              <div class="item-content" style="opacity: 1; transform: scale(1);">
                                  <div id="divParentMessages" class="widget-wrapper">
                                      <div class="CatHeader widget-head">
                                          <div class="widget-options pull-right">
                                      
                                              <span class="icon-expanded widget-collapse"></span>
                                          </div>
                                          <div class="widget-title">Notifications and Messages</div>
                                      </div>
                                      <div class="widget-body">									
                                              <div id="ParentToastMessages" class="ToastMessages">
                                                  
                                                  
  
                                                  <div id="divParentNotification" class="FullWidthAutoHeight" style="display: block;">
                                                      <span id="ctl00_MainContent_lblParentNotification" style="font-weight:bold;">You are scheduled to receive Weekly Progress Emails every Friday at 7:00 PM.</span> <a href="ParentNotificationPreferences.aspx" style="color:#1C3555">Modify</a>
                                                  </div>
                              
                                                  
                                              </div>
                                      </div>
                                  </div>
                              </div>
                          </section>
                                          
                      </div>
  
                      </div>
                  </div>
                              
                  <div class="ToastContainer" style="bottom: 0px;">
                      <div class="divPreviewParentPortalToast">
                          <a href="#" onclick="CloseNotification(event);" class="CloseNotificationX"><i class="fa fa-2x fa-times" aria-hidden="true"></i></a>
                          <h2>Notifications</h2>
                          <div class="divPreviewParentPortalToastMessages">
                                                  
                                                  
  
                                                  <div id="divParentNotification" class="FullWidthAutoHeight" style="display: block;">
                                                      <span id="ctl00_MainContent_lblParentNotification" style="font-weight:bold;">You are scheduled to receive Weekly Progress Emails every Friday at 7:00 PM.</span> <a href="ParentNotificationPreferences.aspx" style="color:#1C3555">Modify</a>
                                                  </div>
                              
                                                  
                                              </div>
                      </div>
                  </div>
  
                  <div class="FullWidthAutoHeight" style="margin:60px 30px 0;">
                      <table id="ctl00_MainContent_tblLoginHistory" class="FullWidth">
          <tbody><tr>
              <td>Currently Accessing From: <span id="ctl00_MainContent_lblCurrentIP">70.187.249.49</span></td>
          </tr>
          <tr>
              <td>Previously Accessed From: <span id="ctl00_MainContent_lblPrevIP">68.5.244.173</span> on <span id="ctl00_MainContent_lblPrevTimestamp">3/27/2021 4:41:38 PM</span></td>
          </tr>
      </tbody></table>
  
                  </div>
              </div>
  
              
              <!-- Admin Widgets -->
              <input type="hidden" name="ctl00$MainContent$Caption" id="ctl00_MainContent_Caption">
  
          <style type="text/css">
              section.item {
                  touch-action: pan-y !important;
              }
              section.item .widget-head {
                  touch-action: none !important;
              }
              .widget-body {
                  touch-action: pan-y !important;
              }
              .WelcomeBlock {
                  position: relative;
              }		
  
              .divPreviewParentPortalToast {
                  display: block;
                  position: relative;
                  float: left;
                  width: 98%;
                  clear: both;
              }
              .divPreviewParentPortalToast h2 {
                  padding: 0;
                  margin: 10px 0 0 10px;
                  line-height: 30px;
                  font-size: 20px;
                  font-weight: bold;
                  color: #5E6D85;
              }
              .divPreviewParentPortalToast p {
                  margin: 20px 0 30px;
              }
              .divPreviewParentPortalToastMessages {
                  width: 100%;
                  padding: 0 8px 8px;
              }
              #ParentToastMessages {
                  padding: 8px;
                  float: left;
              }
              #ParentToastMessages > * {
                  float: left;
              }
              .CloseNotification {
                  display: block;
                  text-align: center;
                  width: 100%;
                  float: left;
                  font-size: 20px;
                  color: #B2BAC5;
              }
              .CloseWelcomeX {
                  font-size: 18px;
                  top: 10px;
                  right: 20px;
              }
              .CloseNotificationX {
                  top: 2px;
                  right: 10px;
              }
              .CloseNotificationX, .CloseWelcomeX {
                  text-decoration: none;
                  position: absolute;
                  display: block;
                  float: right;
                  text-align: right;			
                  color: rgba(94, 109, 133, 0.3);
              }
              .CloseNotificationX:hover, .CloseWelcomeX:hover {
                  text-decoration: none;
                  color: rgba(94, 109, 133, 1);
              }
  
  
  
              .divPreviewParentPortal {
                  position: absolute;
                  left: 0;
                  right: 0;
                  width: 100%;
                  margin: -3px 0 0 0;
                  padding: 20px 30px;
                  border-bottom: 1px solid #345BA9;
                  background-color: #D4EAF8;
              }
              .divPreviewParentPortalpadding {
                  height: 80px;
                  width: 100%;
              }
  
              @media only screen and (max-width: 991px) {
                  .divPreviewParentPortalToast {
                      width: 95% !important;
                  }
              }
          </style>
  
          <script type="text/javascript">
  
              
                  var viewParentNotification = 'true';
                  var id = '174130127';
              
              $(document).ready(function () {
                                  
                  $("[name$='txtStuSearch']").focus();
  
                  $('#divContactsContainer').html('<div class="LoadingBox ac">Loading</div>')
  
                  $.ajax({
                      type: "POST",
                      contentType: "application/json; charset=utf-8",
                      url: $('#lblRootURL').text() + "/Widgets/QuickSearch/Contacts",
                      data: JSON.stringify({ Title: "", ResultsCollapse: false, FocusOnLoad: false }),
                      dataType: 'html',
                      success: function (data) {
  
                          $('#divContactsContainer').html(data);			
                          $('#divContactsContainer').show();
                          $('#divContactsContainer').find('table#tableQuickSearch > tbody > tr:first-child').hide()
                      }
                  });
  
                  ShowDashboardToastNotification();
  
              });
  
              function ShowDashboardToastNotification() {
                  setTimeout(function () {
  
                      try {
                          if ($("#ParentToastMessages").text().trim().length >= 10) {
                              $('.divPreviewParentPortalToastMessages').html($("#ParentToastMessages").html());
                              $('.ToastContainer').show();
                              $('.ToastContainer').velocity({
                                  bottom: "0px",
                              }, {
                                  duration: 600, 
                                  easing: [0.175, 0.885, 0.32, 1.275]
                              });
                          }
  
                      } catch (ex) {
  
                      }
  
                  }, 300);
              }
  
              function CloseNotification() {			
                  $('.ToastContainer').hide();	
              }
  
                  function ShowAssociateContactWindow() {
  
                      $('#divAssociateContacts').kendoWindow();
                      $('#divAssociateContacts').show();
  
                      setTimeout(function () {
  
                          var dialog = $('#divAssociateContacts').data("kendoWindow");
  
                          dialog.setOptions({
                              appendTo: "form#aspnetForm",
                              modal: false,
                              title: 'Select Contact',
                              visible: false,
                              width: 475,
                              height: 400
                          });
  
                          dialog.center().open();
  
                      }, 100);
                  }
  
                  function CloseAssociateContactWindow() {
  
                      if (typeof $('#divAssociateContacts').data("kendoWindow") !== "undefined") {
                          $('#divAssociateContacts').data("kendoWindow").close();
                      }
  
                  }
              
                  // *** Function required for QuickSearch ***
                  //
                  // This function determines what action is made 
                  // when data is selected in the QuickSearch partial.
                  function QuickSearchDataTransfer(JSONData, searchmode) {
  
                      var sq = JSON.parse(JSONData).Sequence;
  
                      if (searchmode === "Contact") {
                          $('input[id*=hdnCONSQ]').val(sq)
                      }
                  }
  
              function CloseWelcome() {
                  $(".WelcomeBlock").hide();
              }
  
              
          </script>
  
  
                  <a id="ctl00_btnPrevious" class="hide" aria-hidden="true" href="javascript:__doPostBack('ctl00$btnPrevious','')"></a> 
                  <a id="ctl00_btnNext" class="hide" aria-hidden="true" href="javascript:__doPostBack('ctl00$btnNext','')"></a>
                  <span id="notification" style="display:none;"></span>	
              </div>		
              
          </main>
  
          <footer id="AeriesFullPageFooter">
              Aeries Version <span id="ctl00_lblVersion">9.21.3.22</span>
              <span id="ctl00_lblCopyright">Copyright © 1995-2021 Aeries Software. All Rights Reserved.</span>
          </footer>
  
  
      <script type="text/javascript">
      //<![CDATA[
      function EditHomePage(){ $get('ctl00_MainContent_btnEditHomePage').click(); return false;}function ExpandOverEmptyColumns(columnOneID,columnTwoID){ if(columnOneID.children().length === 0) { columnTwoID.addClass('a-col-20'); } if(columnTwoID.children().length === 0) { columnOneID.addClass('a-col-20'); }}ExpandOverEmptyColumns($('#ParentHomeRow2_Right'),$('#ParentHomeRow2_Left'));//]]>
      </script>
      <script language="javascript"> var timeoutIsParent = true; var global_SessionTimer; var global_WarningTimer; var global_SessionTimeout = 1200000;  var global_WarningTimeout = 900000;  initSessionTimer(1200000,900000);</script>
      <script type="text/javascript">
      //<![CDATA[
      $(document).ready(function () { $('#ctl00_MainContent_ctl10_txtDate_txtKendoDatePicker').kendoDatePicker({  format:  'MM/dd/yyyy', change: CalendarEvent_SetDate }); $('#ctl00_MainContent_ctl10_txtDate_txtKendoDatePicker').kendoMaskedTextBox({  mask: '00/00/0000' }); $('#ctl00_MainContent_ctl10_txtDate_txtKendoDatePicker').parent().find('span.k-i-calendar').css('margin-bottom', '5px');});$(document).ready(function () { $('#ctl00_MainContent_ctl10_txtMonth_txtKendoMonthPicker').kendoDatePicker({  start: 'year',  depth: 'year',  format:  'MMMM yyyy', change: CalendarEvent_SetDate });});$(document).ready(function () { $('#ctl00_MainContent_ctl10_txtDT_txtKendoDatePicker').kendoDatePicker({  format:  'MM/dd/yyyy' }); $('#ctl00_MainContent_ctl10_txtDT_txtKendoDatePicker').kendoMaskedTextBox({  mask: '00/00/0000' }); $('#ctl00_MainContent_ctl10_txtDT_txtKendoDatePicker').parent().find('span.k-i-calendar').css('margin-bottom', '5px');});$(document).ready(function () { $('#ctl00_MainContent_ctl10_txtED_txtKendoDatePicker').kendoDatePicker({  format:  'MM/dd/yyyy', change: txtED_Changed }); $('#ctl00_MainContent_ctl10_txtED_txtKendoDatePicker').kendoMaskedTextBox({  mask: '00/00/0000' }); $('#ctl00_MainContent_ctl10_txtED_txtKendoDatePicker').parent().find('span.k-i-calendar').css('margin-bottom', '5px');});$(document).ready(function () { if ($('#ctl00_MainContent_ctl10_txtT1_txtKendoTimePicker').length) {  $('#ctl00_MainContent_ctl10_txtT1_txtKendoTimePicker').kendoTimePicker({min: new Date(2000, 0, 1, 0, 0, 0), max: new Date(2000, 0, 1, 0, 0, 0)});   $('#ctl00_MainContent_ctl10_txtT1_txtKendoTimePicker').parent().find('span.k-icon.k-i-clock').css('margin-top', '7px');  $('#ctl00_MainContent_ctl10_txtT1_txtKendoTimePicker').bind('change', onChangeValue); }});var _prevTarget = null;function ShowInvalidTime(target) { $(target).css({ 'background-color': '#ffff64' }); var myWin = new aeriesWin(winType.alert, 'Oops! Please enter a valid time value.'); myWin.modal = true; myWin.displayWin(SetFocus);}function SetFocus() { if(_prevTarget != null) {  $(_prevTarget).val('').select().focus(); };}$(document).ready(function () { if ($('#ctl00_MainContent_ctl10_txtT2_txtKendoTimePicker').length) {  $('#ctl00_MainContent_ctl10_txtT2_txtKendoTimePicker').kendoTimePicker({min: new Date(2000, 0, 1, 0, 0, 0), max: new Date(2000, 0, 1, 0, 0, 0)});   $('#ctl00_MainContent_ctl10_txtT2_txtKendoTimePicker').parent().find('span.k-icon.k-i-clock').css('margin-top', '7px');  $('#ctl00_MainContent_ctl10_txtT2_txtKendoTimePicker').bind('change', onChangeValue); }});var _prevTarget = null;function ShowInvalidTime(target) { $(target).css({ 'background-color': '#ffff64' }); var myWin = new aeriesWin(winType.alert, 'Oops! Please enter a valid time value.'); myWin.modal = true; myWin.displayWin(SetFocus);}function SetFocus() { if(_prevTarget != null) {  $(_prevTarget).val('').select().focus(); };}//]]>
      </script>
      </form>
          
          
          
          <script id="infoTemplate" type="text/x-kendo-template">
              <div class="InfoSmallBox">#= message #<div class="metadata">#= meta #</div></div>
          </script>
  
          <script id="errorTemplate" type="text/x-kendo-template">
              <div class="AlertSmallBox">#= message #<div class="metadata">#= meta #</div></div>
          </script>
  
          <script id="successTemplate" type="text/x-kendo-template">
              <div class="SuccessSmallBox">#= message #<div class="metadata">#= meta #</div></div>
          </script>
  
          <script id="notificationTemplate" type="text/x-kendo-template">
              <div class="NotificationSmallBox">#= message #<div class="metadata">#= meta #</div></div>
          </script>
  
          <script type="text/javascript">
              window.masterSC = $('.MasterSC').val();
              window.masterSN = $('.MasterSN').val();
              window.masterID = $('.MasterPID').val();
          </script>
  
          <script type="text/javascript">
          $(document).ready(function() {
  
              window.masterSC = $('.MasterSC').val();
              window.masterSN = $('.MasterSN').val();
              window.masterID = $('.MasterPID').val();
  
              $('#AeriesFullPageHamburger').click(function(){
              $(this).toggleClass('open');
                  if($(this).hasClass('open')) {
                      $("#AeriesFullPageNav").removeClass('tinymodehidden');
                  } else {
                      $("#AeriesFullPageNav").addClass('tinymodehidden');
                  }
              });
  
              
          });
  
          $(window).load(function() {
              setTimeout(function() {
                  try {
                      var thisCurrentURL = window.location.pathname.substr(window.location.pathname.lastIndexOf("/") + 1) + window.location.search;
                      var thisCurrentPage = $(document).find("title").text();
                      if ($('.CurrentPage').length >= 1) {
                          $('a.CurrentPage').first().text().trim();
                          if ($('.CurrentPage').length >= 2) {
                              thisCurrentPage = $('a.CurrentPage').last().text().trim();
                              thisCurrentURL = $('a.CurrentPage').last().attr('href');
                          }
                      }
                      thisCurrentPage = thisCurrentPage.trim();
                      UserAccountOptionsService.AddRecentPage(thisCurrentURL, thisCurrentPage, DoNothing);
                  } catch(ex) {
                  }
              }, 100);		
          });
          </script>
  
  
  
  
      <div class="k-widget k-window" data-role="draggable" style="padding-top: 35px; min-width: 90px; min-height: 50px; width: 400px; height: 235px; display: none;"><div class="k-window-titlebar k-header" style="margin-top: -35px;">&nbsp;<span class="k-window-title" id="kendoCommonPopup_wnd_title"></span><div class="k-window-actions"><a role="button" href="#" class="k-button k-bare k-button-icon k-window-action" aria-label="Close"><span class="k-icon k-i-close"></span></a></div></div><div id="kendoCommonPopup" data-role="window" class="k-window-content k-content" tabindex="0" role="dialog" aria-labelledby="kendoCommonPopup_wnd_title"></div><div class="k-resize-handle k-resize-n"></div><div class="k-resize-handle k-resize-e"></div><div class="k-resize-handle k-resize-s"></div><div class="k-resize-handle k-resize-w"></div><div class="k-resize-handle k-resize-se"></div><div class="k-resize-handle k-resize-sw"></div><div class="k-resize-handle k-resize-ne"></div><div class="k-resize-handle k-resize-nw"></div></div><div aria-hidden="true" class="k-calendar-container k-popup k-group k-reset" id="ctl00_MainContent_ctl10_txtDate_txtKendoDatePicker_dateview" data-role="popup" style="display: none; position: absolute;"></div><div aria-hidden="true" class="k-calendar-container k-popup k-group k-reset" id="ctl00_MainContent_ctl10_txtDT_txtKendoDatePicker_dateview" data-role="popup" style="display: none; position: absolute;"></div><div aria-hidden="true" class="k-calendar-container k-popup k-group k-reset" id="ctl00_MainContent_ctl10_txtED_txtKendoDatePicker_dateview" data-role="popup" style="display: none; position: absolute;"></div><div class="k-list-container k-list-scroller k-popup k-group k-reset" unselectable="on" data-role="popup" style="display: none; position: absolute;"><ul tabindex="-1" role="listbox" aria-hidden="true" unselectable="on" class="k-list k-reset" id="ctl00_MainContent_ctl10_txtT1_txtKendoTimePicker_timeview" style="overflow: auto;"></ul></div><div class="k-list-container k-list-scroller k-popup k-group k-reset" unselectable="on" data-role="popup" style="display: none; position: absolute;"><ul tabindex="-1" role="listbox" aria-hidden="true" unselectable="on" class="k-list k-reset" id="ctl00_MainContent_ctl10_txtT2_txtKendoTimePicker_timeview" style="overflow: auto;"></ul></div><div id="weava-permanent-marker" date="1616934263291"></div><span id="pablo-extension-hover-button" style="display: none;position: absolute;z-index: 8675309;width: 66px;height: 25px;background-image: url(chrome-extension://gfpibnlcombjoeejlongmihndgkpnjjo/data/shared/img/pablo-hover-icon@2x.png);background-size: 66px 25px;opacity: 0.9;cursor: pointer;"></span><div id="weava-ui-wrapper"><div class="weava-drop-area-wrapper"><div class="weava-drop-area"></div>
      <div class="weava-drop-area-text">Drop here!</div>
      </div></div></body></html>
      `