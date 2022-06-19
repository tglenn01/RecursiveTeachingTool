package backend.dynamicAnalysis;

import backend.RecursiveExample;

import java.lang.reflect.Method;

// Used during to preform dynamic analysis
public class DynamicAnalysis {
    private static int id = 1;

    /**
     *
     * creates the target class and then invokes the recursive function
     *
     * @param methodName method to be called
     * @param parameterTypes types of parameters of the method
     * @param parameters parameters to be passed in
     */
    public static void init(String methodName, Class[] parameterTypes, Object... parameters) throws Exception {

        RecursiveExample rem = new RecursiveExample();

        Class cls = rem.getClass();

        System.out.println("Got class " + cls.getSimpleName());

        Method method = cls.getDeclaredMethod(methodName, parameterTypes);

        method.invoke(rem, parameters);
    }

    /**
     *
     * Called by the program on recursive methods to update the recursiveData.json file
     *
     * @param currentMethod The current method
     */
    public static void analyze(MyMethod currentMethod) {
        MyMethod parent = currentMethod.parent;
        if (parent != null) {
            parent.addChild(currentMethod);
        }
    }

    // Updates the recursiveJson file
    private static void updateJson() {

    }

    public static int getNextId() {
        return id++;
    }
}
