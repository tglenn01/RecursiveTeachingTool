package backend.staticAnalysis;

import japa.parser.ast.Node;
import japa.parser.ast.body.MethodDeclaration;
import japa.parser.ast.expr.BinaryExpr;
import japa.parser.ast.expr.Expression;
import japa.parser.ast.expr.MethodCallExpr;
import japa.parser.ast.visitor.VoidVisitorAdapter;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

// TODO Update this code to print out recursive methods
public class MethodVisitor extends VoidVisitorAdapter {
    private List<String> recursiveMethods = new ArrayList<>();

    @Override
    public void visit(MethodCallExpr methodCall, Object arg) {

        if (isRecursiveMethod(methodCall)) {
            addRecursiveMethod(methodCall.getName());
        }

        /*
        System.out.print("Method call: " + methodCall.getName() + "\n");

        List<Expression> args = methodCall.getArgs();
        if (args != null) {
            handleExpressions(args);
        }
         */
    }

    private boolean isRecursiveMethod(MethodCallExpr methodCall) {
        String methodName = methodCall.getName();
        Node parentNode = methodCall.getParentNode();
        while (parentNode != null) {

            if (parentNode.getClass() == MethodDeclaration.class) {

                String parentMethodName = ((MethodDeclaration) parentNode).getName();

                if (methodName.equals(parentMethodName)) {
                    return true;

                }
            }

            parentNode = parentNode.getParentNode();

        }

        return false;
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

    public List<String> getRecursiveMethods() {
        return recursiveMethods;
    }

    private void addRecursiveMethod(String methodName) {
        if (!recursiveMethods.contains(methodName)) {
            recursiveMethods.add(methodName);
        }
    }
}