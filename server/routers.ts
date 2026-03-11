import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { executePythonCode } from "./python_executor";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  python: router({
    execute: publicProcedure
      .input(z.object({ code: z.string() }))
      .mutation(async ({ input }) => {
        return await executePythonCode(input.code);
      }),
  }),

  quiz: router({
    submitQuiz: publicProcedure
      .input(z.object({
        lessonId: z.number(),
        lessonTitle: z.string(),
        answers: z.record(z.number(), z.number()),
        score: z.number(),
        totalQuestions: z.number(),
        percentage: z.number(),
      }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user) {
          console.log(`Quiz submitted by user ${ctx.user.id}: Lesson ${input.lessonId}, Score: ${input.score}/${input.totalQuestions}`);
        }
        
        return {
          success: true,
          message: 'บันทึกผลการทำแบบทดสอบสำเร็จ',
          score: input.score,
          totalQuestions: input.totalQuestions,
          percentage: input.percentage,
        };
      }),
  }),
});

export type AppRouter = typeof appRouter;
