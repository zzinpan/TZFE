

/**
 * 2차원 벡터 - 크기와 방향을 가진 물리량 혹은 좌표
 */
class Vector2{
	
	
	/** @property {number}  벡터 x 속성 */
	x;
	
	/** @property {number}  벡터 y 속성 */
	y;
	
	
	/** 
	 * @constant
	 * @type {string} 
	 * @default
	 */
	static X = "x";
	
	
	/** 
	 * @constant
	 * @type {string} 
	 * @default
	 */
	static Y = "y";
	
	
	/** 
	 * @constant
	 * @type {string} 
	 * @default
	 */
	static XY = "xy";
	
	
	/** 
	 * @author zzinpan <zzinapn@kakao.com>
	 * @version 1.0.0
	 * @param {number} [x=0] 기본 벡터 x 속성
	 * @param {number} [y=0] 기본 벡터 y 속성
	 * @description TZFE.Vector2 생성자
	 */
	constructor( x, y ){
		
		this.x = 0;
		this.y = 0;
		
		this.set( x, y );
		
	}
	
	
	/** 
	 * @author zzinpan <zzinapn@kakao.com>
	 * @version 1.0.0
	 * @description 벡터 속성을 설정한다.
	 * @param {number} [x=this.x] 벡터 x 속성
	 * @param {number} [y=this.y] 벡터 y 속성
	 * @returns {TZFE.Vector2} this
	 */
	set( x = this.x, y = this.y ){
		
		this.x = x;
		this.y = y;
		return this;
		
	}
	
	
	/** 
	 * @author zzinpan <zzinapn@kakao.com>
	 * @version 1.0.0
	 * @description 다른 벡터 속성을 this의 속성으로 복사한다.
	 * @param {TZFE.Vector2} vector2 복사에 참조할 벡터
	 * @returns {TZFE.Vector2} this
	 */
	copy( vector2 ){
		
		this.set( vector2.x, vector2.y );
		return this;
		
	}
	
	
	/** 
	 * @author zzinpan <zzinapn@kakao.com>
	 * @version 1.0.0
	 * @description this를 기준으로 새로운 벡터를 복사 생성한다.
	 * @returns {TZFE.Vector2} 복사된 벡터
	 */
	clone(){
		
		return new Vector2( this.x, this.y );
		
	}
	
	
	/** 
	 * @author zzinpan <zzinapn@kakao.com>
	 * @version 1.0.0
	 * @description 벡터의 크기를 반환한다.
	 * @returns {number} 벡터의 크기
	 */
	length(){
		
		return Math.sqrt( this.x * this.x + this.y + this.y );
		
	}

	
	/** 
	 * @author zzinpan <zzinapn@kakao.com>
	 * @version 1.0.0
	 * @description 벡터의 방향은 그대로 크기를 1로 변경한다.
	 * @returns {tZFE.Vector2} this
	 */
	normalize(){
		
		return this.divideScalar( this.length() || 1 );
		
	}


	/** 
	 * @author zzinpan <zzinapn@kakao.com>
	 * @version 1.0.0
	 * @description 다른 벡터를 this에 곱한다.
	 * @param {tZFE.Vector2} vector2 곱할 벡터 
	 * @returns {tZFE.Vector2} this
	 */
	multiply( vector2 ) {

		this.x *= vector2.x;
		this.y *= vector2.y;

		return this;

	}
	
	
	/** 
	 * @author zzinpan <zzinapn@kakao.com>
	 * @version 1.0.0
	 * @description 실수를 this에 곱한다.
	 * @param {number} scalar 곱할 실수
	 * @returns {tZFE.Vector2} this
	 */
	multiplyScalar( scalar ) {

		this.x *= scalar;
		this.y *= scalar;

		return this;

	}
	
	
	/** 
	 * @author zzinpan <zzinapn@kakao.com>
	 * @version 1.0.0
	 * @description this에서 다른 벡터를 나눈다.
	 * @param {TZFE.Vector2} vector2 나눌 벡터
	 * @returns {tZFE.Vector2} this
	 */
	divide( vector2 ) {

		this.x /= vector2.x;
		this.y /= vector2.y;

		return this;

	}
	
	
	/** 
	 * @author zzinpan <zzinapn@kakao.com>
	 * @version 1.0.0
	 * @description this에서 실수를 나눈다.
	 * @param {number} scalar 나눌 실수
	 * @returns {tZFE.Vector2} this
	 */
	divideScalar( scalar ) {

		return this.multiplyScalar( 1 / scalar );

	}
	
	
	/** 
	 * @author zzinpan <zzinapn@kakao.com>
	 * @version 1.0.0
	 * @description this에서 실수를 나눈다.
	 * @param {number} scalar 나눌 실수
	 * @returns {tZFE.Vector2} this
	 */
	getDirectionPropertyName = function() {
		
		var name = "";
		if( this.x != 0 ){
			name += "x";
		}
		if( this.y != 0 ){
			name += "y";
		}
		
		return name;
		
	}
	
	
	
}




export default Vector2;

