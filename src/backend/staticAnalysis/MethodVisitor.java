package backend.staticAnalysis;

import japa.parser.ast.expr.BinaryExpr;
import japa.parser.ast.expr.Expression;
import japa.parser.ast.expr.MethodCallExpr;
import japa.parser.ast.visitor.VoidVisitorAdapter;

import java.util.Arrays;
import java.util.List;

// TODO Update this code to print out recursive methods
public class MethodVisitor extends VoidVisitorAdapter {

    @Override
    public void visit(MethodCallExpr methodCall, Object arg) {
        System.out.print("Method call: " + methodCall.getName() + "\n");
        List<Expression> args = methodCall.getArgs();
        if (args != null)
            handleExpressions(args);
    }

    private void handleExpressions(List<Expression> expressions) {
        for (Expression expr : expressions) {
            if (expr instanceof MethodCallExpr){

                visit((MethodCallExpr) expr, null);

            } else if (expr instanceof BinaryExpr) {

                BinaryExpr binExpr = (BinaryExpr)expr;
                handleExpressions(Arrays.asList(binExpr.getLeft(), binExpr.getRight()));

            }
        }
    }
}