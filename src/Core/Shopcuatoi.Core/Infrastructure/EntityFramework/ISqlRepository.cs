﻿using System.Collections.Generic;

namespace Shopcuatoi.Core.Infrastructure.EntityFramework
{
    public interface ISqlRepository
    {
        void RunCommand(string command);

        void RunCommands(IEnumerable<string> command);

        IEnumerable<string> ParseCommand(IEnumerable<string> lines);

        void CreateInitData();
    }
}