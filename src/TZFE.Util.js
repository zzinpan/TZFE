
/** 
 * TZFE.Util
 */
const Util = {

		
	/** 
	 * @author zzinpan <zzinapn@kakao.com>
	 * @version 1.0.0
	 * @description 라인 문자열을 생성하여 반환합니다.
	 * @param {number} columnCount 컬럼수
	 * @param {number} maxStringlength 최대문자열길이
	 * @param {string} start 처음문자열
	 * @param {string} center 중간문자열
	 * @param {string} centerSeparator 중간구분문자열
	 * @param {string} end 끝문자열
	 * @return {string} 라인 문자열
	 */
	getLineString: function( columnCount, maxLevelValuelength, start, center, centerSeparator, end ){
		
		return start + new Array( columnCount ).fill( "".padStart( maxLevelValuelength, center ) ).join( centerSeparator ) + end;
		
	},
	
	
	/** 
	 * @author zzinpan <zzinapn@kakao.com>
	 * @version 1.0.0
	 * @description 유일한 값을 생성하여 반환합니다.
	 * @return {string} 유일한 id
	 */
	getRandomId: function(){
		
		return Date.now() + "::" + Math.random() * 100000000000000000;
		
	},
	
	
	/** 
	 * @author zzinpan <zzinapn@kakao.com>
	 * @version 1.0.0
	 * @description 인자값 2개를 포함한 범위 내 임의의 정수를 반환합니다.
	 * @params {number} min - 최소값
	 * @params {number} max - 최대값
	 * @return {number} 범위 내 임의의 정수
	 */
	getRandomInteger: function( min, max ){
		
		return Math.round( Math.random() * ( max - min ) ) + min; 
		
	}
		
};

export default Util;

