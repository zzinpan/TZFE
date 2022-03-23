import Vector2 from "./TZFE.Vector2.js";
import Grid from "./TZFE.Grid.js";
import Util from "./TZFE.Util.js";
import Block from "./TZFE.Block/TZFE.Block.js";
import LevelBlock from "./TZFE.Block/TZFE.LevelBlock.js";
import Direction from "./constant/TZFE.Direction.js";
import Directions from "./constant/TZFE.Directions.js";
import Plugin from "./plugin/TZFE.Plugin.js";


const Const = {
	
	vector2: new Vector2()
		
};



/** 
 * TZFE 종합 API
 */
class TZFE {
	
	
	grid;
	store;
	
	
	/** 
	 * @author zzinpan <zzinapn@kakao.com>
	 * @version 1.0.0
	 * @description TZFE 생성자
	 */
	contstructor(){
		
		this.grid = null;
		this.store = [];
		
	}
	
	
	/** 
	 * @author zzinpan <zzinapn@kakao.com>
	 * @version 1.0.0
	 * @description 기존 상태와 비교하여 변경 점이 있다면, 상태를 신규로 저장하고, 저장 여부 결과를 반환합니다.
	 * @return {boolean} 저장 여부
	 */
	save(){
		
		const before = this.store[ this.store.length - 1 ];
		
		if( before == null ){
			this.store.push( this.grid.clone() );
			return true;
		}
		
		
		const isUpdate = this.grid.rows.some( ( nowRow, rowIndex ) => {
			
			return nowRow.some( ( nowBlock, columnIndex ) => {
				
				Const.vector2.set( columnIndex, rowIndex );
				
				const beforeBlock = before.getBlockByPosition( Const.vector2 );
				
				if( beforeBlock == null && nowBlock == null ){
					return false;
				}
				
				if( beforeBlock == null ){
					return true;
				}
				
				if( nowBlock == null ){
					return true;
				}

				return nowBlock.equals( beforeBlock ) == false;
				
			} );
			
		} );

		
		if( isUpdate ){
			
			this.store.push( this.grid.clone() );
			
		}
		
		return isUpdate;
		
	}
	
	
	/** 
	 * @author zzinpan <zzinapn@kakao.com>
	 * @version 1.0.0
	 * @description 기존 상태와 비교하여 변경 점이 있다면, 상태를 신규로 저장하고, 저장 여부 결과를 반환합니다.
	 * @param {TZFE.Direction} direction 이동시킬 방향
	 * @return {TZFE.Block.Update[]} 업데이트된 블록 정보
	 */
	move( direction ){
		
		return this.grid.move( direction );
		
	}
	
	
	/** 
	 * @author zzinpan <zzinapn@kakao.com>
	 * @version 1.0.0
	 * @description 그리드를 완전히 초기화 시킵니다.
	 * @param {number} [rowCount=this.grid.rowCount] 그리드 줄 갯수
	 * @param {number} [rowCount=this.grid.columnCount] 그리드 열 갯수
	 * @return {TZFE.Vector2} 초기화된 그리드의 줄, 열 갯수  
	 */
	clear( rowCount = this.grid.rowCount, columnCount = this.grid.rowCount ){
		
		this.grid = new Grid( rowCount, columnCount );
		return new Vector2( rowCount, columnCount );
		
	}
	
	
	/** 
	 * @author zzinpan <zzinapn@kakao.com>
	 * @version 1.0.0
	 * @description 그리드를 완전히 초기화 시킵니다.
	 * @param {number} [rowCount=new LevelBlock( Util.getRandomInteger( 1, 2 ) )] 추가할 블록
	 * @return {TZFE.Vector2} 추가된 블록의 좌표  
	 */
	addBlock( block ){
		
		if( block == null ){
			
			block = new LevelBlock( Util.getRandomInteger( 1, 2 ) );
			
		}
		
		return this.grid.addBlock( block );
		
	}
	
	
	/** 
	 * @author zzinpan <zzinapn@kakao.com>
	 * @version 1.0.0
	 * @description 그리드를 콘솔로 출력합니다.
	 */
	print(){

		console.log( this.grid.toString() );
		
	}
	
	
	/** 
	 * @author zzinpan <zzinapn@kakao.com>
	 * @version 1.0.0
	 * @description 플러그인을 추가합니다.
	 * @param {TZFE.Plugin} plugin 추가할 플러그인
	 */
	addPlugin( plugin ){
		
		if( plugin instanceof Plugin ){
			
			plugin.setup( TZFE );
			
		}
		
	}
	
	
	static Vector2 = Vector2;
	static Util = Util;
	static Grid = Grid;
	static Block = Block;
	static LevelBlock = LevelBlock;
	static Direction = Direction;
	static Directions = Directions;
	static Plugin = Plugin;

	
}


export default TZFE;