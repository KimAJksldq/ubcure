"use strict";(self["webpackChunkDTX_MEDI_PLATFORM"]=self["webpackChunkDTX_MEDI_PLATFORM"]||[]).push([[292],{54292:function(t,e,a){a.r(e),a.d(e,{default:function(){return b}});var s=function(){var t=this,e=t._self._c;return e("main",{staticClass:"remedy__category__main"},[e("RemedyCategoryPopup",{attrs:{popupEventFlag:t.popupEventFlag,popupState:t.popupState,selectedObj:t.selectedRowObj,treatmentSubjectList:t.treatmentSubjectList},on:{popupClose:t.popupToggle}}),e("section",{staticClass:"box__shadow__01 vertical__scroll"},[e("h3",{staticClass:"page__title"},[t._v(" "+t._s(this.$store.state.pageInfo["치료제 카테고리"].title)+" ")]),e("h5",{staticClass:"page__sub__title f__regular"},[t._v(" "+t._s(this.$store.state.pageInfo["치료제 카테고리"].subTitle)+" ")]),e("div",{staticClass:"grid__button__wrap"},[e("div",{staticClass:"search__wrap"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.subjectIdFilter,expression:"subjectIdFilter"}],ref:"subjectSelector",attrs:{name:"",id:""},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.subjectIdFilter=e.target.multiple?a:a[0]},t.gridDataFiltering]}},[e("option",{attrs:{value:""}},[t._v("과목전체")]),t._l(t.treatmentSubjectList,(function(a){return e("option",{key:a.index,domProps:{value:a.codeId}},[t._v(" "+t._s(a.codeName)+" ")])}))],2),e("input",{ref:"categoryNameInput",staticClass:"custom__input",attrs:{type:"text",placeholder:"카테고리명을 입력하세요"}}),e("button",{staticClass:"custom__btn",on:{click:t.gridDataFiltering}},[t._m(0),e("p",[t._v("조회")])])]),e("button",{staticClass:"custom__btn",on:{click:function(e){return t.popupToggle("추가")}}},[t._m(1),e("p",[t._v("카테고리 추가")])])]),e("div",{staticClass:"grid__wrap",on:{click:function(e){return t.rowClick(e)}}},[e("Grid",{ref:"gridEl",staticClass:"on",attrs:{cols:t.cols,pagination:!0,sort:!0,rows:t.filteredGridData}})],1)])],1)},i=[function(){var t=this,e=t._self._c;return e("span",[e("img",{attrs:{src:a(39615),alt:"검색 아이콘"}})])},function(){var t=this,e=t._self._c;return e("span",[e("img",{attrs:{src:a(69067),alt:"플러스 아이콘"}})])}],r=(a(57658),a(28861)),o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"popup__wrap",class:{on:"Open"===t.popupEventFlag}},[e("div",{staticClass:"popup__bg"}),e("div",{staticClass:"common__popup box__shadow__02"},[e("div",{staticClass:"popup__top"},[e("h4",[t._v("치료제 카테고리 "+t._s(t.popupState))]),e("button",{staticClass:"pop__close__btn",on:{click:t.popupCloseClick}})]),e("ul",[e("li",[e("dl",[e("dt",{staticClass:"f__medium"},[t._v("과목")]),e("dd",[e("select",{directives:[{name:"model",rawName:"v-model",value:t.paramObj.subjectId,expression:"paramObj.subjectId"}],attrs:{name:"",id:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.paramObj,"subjectId",e.target.multiple?a:a[0])}}},[e("option",{attrs:{value:""}},[t._v("과목전체")]),t._l(t.treatmentSubjectList,(function(a){return e("option",{key:a.index,domProps:{value:a.codeId}},[t._v(" "+t._s(a.codeName)+" ")])}))],2)])])]),e("li",[e("dl",[e("dt",{staticClass:"f__medium"},[t._v("카테고리명")]),e("dd",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.paramObj.categoryName,expression:"paramObj.categoryName"}],staticClass:"custom__input",attrs:{type:"text"},domProps:{value:t.paramObj.categoryName},on:{input:function(e){e.target.composing||t.$set(t.paramObj,"categoryName",e.target.value)}}})])])]),t._m(0)])])])},n=[function(){var t=this,e=t._self._c;return e("li",[e("button",{staticClass:"custom__btn"},[e("span",[e("img",{attrs:{src:a(99685),alt:"저장 아이콘"}})]),e("p",[t._v("저장")])])])}],c={data(){return{paramObj:{subjectId:""}}},props:{popupEventFlag:String,popupState:String,selectedObj:[Object,Boolean],treatmentSubjectList:Array},watch:{popupState(){"수정"===this.popupState?(this.paramObj=this.selectedObj,"development"==this.$env&&console.log(this.paramObj)):"추가"===this.popupState&&(this.paramObj={})}},computed:{getRemedySubject(){return this.$store.state.treatmentManagement.subject}},methods:{popupCloseClick(){this.$emit("popupClose","Close")}}},l=c,u=a(1001),p=(0,u.Z)(l,o,n,!1,null,null,null),d=p.exports,m=a(50722),g=a(74806),_=a.n(g),h={components:{Grid:r.rj,RemedyCategoryPopup:d},computed:{getRemedyCategory(){return this.$store.state.treatmentManagement.category},getRemedySubject(){return this.$store.state.treatmentManagement.subject}},data(){return{filteredGridDataBack:[],filteredGridData:[],selectedState:"",cols:[{name:"과목",id:"subjectName"},{name:"카테고리명",id:"codeName"},{name:"등록자명",id:"registerName"},{name:"등록일자",id:"createDate"},{name:"수정"},{name:"삭제"}],selectedRowObj:{},popupState:"",popupEventFlag:"Close",treatmentSubjectList:[],treatmentCategoryList:[],aStopTreatmentCategoryList:[],mStrongTreatmentCategoryList:[],subjectIdFilter:""}},mounted(){this.filteredGridDataBack=this.getRemedyCategory,this.filteredGridData=this.getRemedyCategory,this.getTreatmentSubjectList(),this.getTreatmentCategoryList()},methods:{getTreatmentSubjectList(){let t="mainCommCode=APP_DIV&useYn=Y";(0,m.kP)(t).then((t=>{this.treatmentSubjectList=t.data.response.codeList}))},getTreatmentCategoryList(){let t="mainCommCode=TACA&useYn=Y";(0,m.kP)(t).then((t=>{this.aStopTreatmentCategoryList=t.data.response.codeList})).then((()=>{let t="mainCommCode=TMCA&useYn=Y";(0,m.kP)(t).then((t=>{this.mStrongTreatmentCategoryList=t.data.response.codeList})).then((()=>{this.treatmentCategoryList=_().concat(this.aStopTreatmentCategoryList,this.mStrongTreatmentCategoryList),this.treatmentCategoryList.forEach((t=>{"TACA"===t.mainCommCode?(t.subjectName="알코올 중독 치료",t.subjectId="APP001"):"TMCA"===t.mainCommCode&&(t.subjectName="인지장애 치료",t.subjectId="APP002")})),this.filteredGridDataBack=this.treatmentCategoryList,this.filteredGridData=this.treatmentCategoryList}))}))},popupToggle(t){"추가"===t&&(this.selectedRowObj=!1),this.popupState=t,"Close"===this.popupEventFlag?this.popupEventFlag="Open":this.popupEventFlag="Close"},gridDataFiltering(){const t=this.$refs.subjectSelector.options[this.$refs.subjectSelector.selectedIndex].textContent.trim();if(this.filteredGridData=this.filteredGridDataBack,"과목전체"!==t&&(this.filteredGridData=this.filteredGridData.filter((e=>e.subjectName.trim()===t.trim()))),this.filteredGridData.length>0){const t=[];this.filteredGridData.forEach((e=>{e.codeName.includes(this.$refs.categoryNameInput.value)&&t.push(e)})),this.filteredGridData=t}},rowClick(t){const e=t.path[0].parentNode;switch(this.selectedState=t.path[0].getAttribute("data-column-id"),this.selectedState){case"수정":this.selectedRowObj={},this.selectedRowObj.subject=e.childNodes[0].textContent,this.selectedRowObj.categoryName=e.childNodes[2].textContent,this.selectedRowObj.registrantName=e.childNodes[3].textContent,this.popupToggle("수정");break;case"삭제":"development"==this.$env&&console.log("삭제");break}},gridSizeCheck(){this.filteredGridData.length>0?this.$refs.gridEl.$el.classList.add("on"):this.$refs.gridEl.$el.classList.remove("on")}}},C=h,f=(0,u.Z)(C,s,i,!1,null,null,null),b=f.exports},50722:function(t,e,a){a.d(e,{KJ:function(){return o},QX:function(){return r},jE:function(){return n},kP:function(){return i},uH:function(){return c}});var s=a(18701);function i(t){return t?(0,s.U2)(`/system/commonCode?${t}`):(0,s.U2)("/system/commonCode")}function r(){return(0,s.U2)("/system/classificationCode")}function o(t){return(0,s.Ue)("/system/commonCode",t)}function n(t){return(0,s.Vx)(`/system/commonCode/${t.codeId}`,t)}function c(t){return(0,s.Od)(`/system/commonCode/${t}`)}},69067:function(t,e,a){t.exports=a.p+"img/ic-plus.699e4fe1.svg"},39615:function(t,e,a){t.exports=a.p+"img/ic-search.05d88541.svg"}}]);
//# sourceMappingURL=292.a5f04fc4.js.map