package backend.staticAnalysis;

import japa.parser.JavaParser;
import japa.parser.ast.CompilationUnit;

import java.io.FileInputStream;

public class StaticRecursiveMethodFinder {
    public static void locateRecursiveMethods(String filePath) throws Exception
    {

        FileInputStream in = new FileInputStream(filePath);

        CompilationUnit cu;
        try
        {
            cu = JavaParser.parse(in);
        }
        finally
        {
            in.close();
        }

        MethodVisitor mv = new MethodVisitor();
        mv.visit(cu, null);

    }
}
