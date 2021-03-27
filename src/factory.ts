import { Add } from './add';
import { Minus } from './minus';
import { Divide } from './divide';
import { Multiply } from './multiply';
import { Formula } from './formula';

export class Factory {
    static makeAddInstance() : Formula{
        return new Add();
    }
    
    static makeMinusInstance() : Formula {
        return new Minus();
    }
    
    static makeDivideInstance() : Formula {
        return new Divide();
    }
    
    static makeMultiplyInstance() : Formula {
        return new Multiply();
    }
}