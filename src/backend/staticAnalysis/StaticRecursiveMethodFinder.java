package backend.staticAnalysis;

import japa.parser.JavaParser;
import japa.parser.ParseException;
import japa.parser.ast.CompilationUnit;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.*;

public class StaticRecursiveMethodFinder {
    private static Map<String, List<String>> map = new HashMap<>();

    public static void main(String[] args) throws Exception {
        if (args.length == 0) {
            System.out.println("Please provide directory path");
            return;
        }
        locateRecursiveMethods(args[0]);
    }

    private static void locateRecursiveMethods(String repoPath) throws Exception {

        List<File> repoFiles = listFiles(repoPath);

        if (repoFiles.isEmpty()) {
            System.out.println("Unable to find any files under " + repoPath);
            return;
        }

        for (File file : repoFiles) {

            if (file.getName().endsWith(".java")) {
                visitClass(file);
            }
        }

        printMethods();

    }

    private static void visitClass(File file) throws ParseException, IOException {
        FileInputStream in = new FileInputStream(file);

        CompilationUnit cu;
        try {
            cu = JavaParser.parse(in);
        } finally {
            in.close();
        }

        MethodVisitor mv = new MethodVisitor();
        mv.visit(cu, null);

        List<String> recursiveMethods = mv.getRecursiveMethods();
        if (!recursiveMethods.isEmpty()) {
            map.put(file.getPath(), mv.getRecursiveMethods());
        }
    }

    private static List<File> listFiles(final String directory) {
        if (directory == null) {
            return Collections.EMPTY_LIST;
        }
        List<File> fileList = new ArrayList<>();
        File[] files = new File(directory).listFiles();
        for (File element : files) {
            if (element.isDirectory()) {
                fileList.addAll(listFiles(element.getPath()));
            } else {
                fileList.add(element);
            }
        }
        return fileList;
    }

    private static void printMethods() {
        System.out.println("\nRecursive Methods\n-----------------");

        for (Map.Entry<String, List<String>> entry : map.entrySet()) {

            System.out.println(entry.getKey() + ":");

            for (String method : entry.getValue()) {
                System.out.println("    - " + method);
            }

            System.out.println("");

        }
    }
}
